import express, { Request, Response, NextFunction } from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { connectToDatabase } from './src/lib/mongodb.ts';
import { Membership } from './src/models/Membership.ts';
import { ContactInquiry } from './src/models/ContactInquiry.ts';
import { membershipSchema } from './src/lib/validations/membership.ts';
import { contactSchema } from './src/lib/validations/contact.ts';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// In-memory sliding window rate limiter for spam prevention
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();

function rateLimiter(maxRequests: number, windowMs: number) {
  return (req: Request, res: Response, next: NextFunction): void => {
    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
      req.socket.remoteAddress ||
      'unknown-ip';

    const now = Date.now();
    const existing = rateLimitMap.get(ip);

    if (!existing || now > existing.resetAt) {
      rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs });
      return next();
    }

    if (existing.count >= maxRequests) {
      const waitSeconds = Math.ceil((existing.resetAt - now) / 1000);
      res.status(429).json({
        success: false,
        error: `Too many submissions. Please wait ${waitSeconds} seconds before trying again.`
      });
      return;
    }

    existing.count += 1;
    next();
  };
}

function generateReference(prefix: string): string {
  const year = new Date().getFullYear();
  const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `${prefix}-${year}-${randomChars}`;
}

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  // Security & request limit
  app.use(express.json({ limit: '250kb' }));

  // Pre-warm database connection
  try {
    await connectToDatabase();
    console.log('[FitFlow Server] Database pre-warmed successfully.');
  } catch (err) {
    console.warn('[FitFlow Server] Initial DB connection deferred to first request:', err);
  }

  // API Routes
  // 1. Health & Database Status
  app.get('/api/health', async (_req: Request, res: Response) => {
    try {
      const mongooseInstance = await connectToDatabase();
      const isConnected = mongooseInstance.connection.readyState === 1;
      res.json({
        status: isConnected ? 'healthy' : 'degraded',
        dbState: mongooseInstance.connection.readyState,
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
      });
    } catch {
      res.status(500).json({ status: 'unhealthy', dbState: 0 });
    }
  });

  // 2. Membership Registration API
  app.post(
    '/api/memberships',
    rateLimiter(15, 15 * 60 * 1000), // Max 15 submissions per 15 mins per IP
    async (req: Request, res: Response): Promise<void> => {
      try {
        // Validate request body with Zod
        const validation = membershipSchema.safeParse(req.body);

        if (!validation.success) {
          const formattedErrors = validation.error.format();
          res.status(400).json({
            success: false,
            error: 'Validation failed. Please correct the highlighted errors.',
            fieldErrors: formattedErrors
          });
          return;
        }

        const data = validation.data;

        // Establish database connection
        await connectToDatabase();

        // Generate unique registration reference
        let reference = generateReference('FIT');
        let exists = await Membership.findOne({ registrationReference: reference }).lean();
        let attempts = 0;
        while (exists && attempts < 5) {
          reference = generateReference('FIT');
          exists = await Membership.findOne({ registrationReference: reference }).lean();
          attempts++;
        }

        // Persist to MongoDB
        const newMembership = await Membership.create({
          registrationReference: reference,
          fullName: data.fullName,
          email: data.email,
          phone: data.phone,
          dateOfBirth: data.dateOfBirth || undefined,
          gender: data.gender || undefined,
          membershipPlan: data.membershipPlan,
          fitnessGoal: data.fitnessGoal,
          experienceLevel: data.experienceLevel,
          preferredStartDate: data.preferredStartDate || undefined,
          additionalNotes: data.additionalNotes || undefined,
          consentAccepted: true,
          status: 'pending'
        });

        // Safe client response (no internal DB secrets or passwords)
        res.status(201).json({
          success: true,
          registrationReference: newMembership.registrationReference,
          fullName: newMembership.fullName,
          email: newMembership.email,
          membershipPlan: newMembership.membershipPlan,
          fitnessGoal: newMembership.fitnessGoal,
          status: newMembership.status,
          createdAt: newMembership.createdAt.toISOString(),
          message:
            'Your membership application for Oxygen Fitness (Kailahat) has been successfully saved to our database. A concierge will review your registration within 24 hours.'
        });
      } catch (err: unknown) {
        console.error('[API /memberships Error]', err instanceof Error ? err.message : err);
        res.status(500).json({
          success: false,
          error:
            'A database processing error occurred while recording your registration. Please try again or contact our concierge directly.'
        });
      }
    }
  );

  // 3. Contact Inquiry API
  app.post(
    '/api/contact',
    rateLimiter(20, 15 * 60 * 1000), // Max 20 inquiries per 15 mins per IP
    async (req: Request, res: Response): Promise<void> => {
      try {
        const validation = contactSchema.safeParse(req.body);

        if (!validation.success) {
          res.status(400).json({
            success: false,
            error: 'Invalid inquiry data. Please check all required fields.',
            fieldErrors: validation.error.format()
          });
          return;
        }

        const data = validation.data;
        await connectToDatabase();

        const reference = generateReference('INQ');

        const clientIp =
          (req.headers['x-forwarded-for'] as string)?.split(',')[0].trim() ||
          req.socket.remoteAddress ||
          '';

        const inquiry = await ContactInquiry.create({
          inquiryReference: reference,
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          ipAddress: clientIp,
          status: 'new'
        });

        res.status(201).json({
          success: true,
          inquiryReference: inquiry.inquiryReference,
          receivedAt: inquiry.createdAt.toISOString(),
          message:
            'Thank you. Your message has been saved in our system and forwarded to the club operations team.'
        });
      } catch (err: unknown) {
        console.error('[API /contact Error]', err instanceof Error ? err.message : err);
        res.status(500).json({
          success: false,
          error:
            'An error occurred while transmitting your message to the database. Please try again shortly.'
        });
      }
    }
  );

  // 4. Reference Verification Endpoint
  app.get('/api/memberships/check/:reference', async (req: Request, res: Response): Promise<void> => {
    try {
      const ref = req.params.reference.toUpperCase().trim();
      await connectToDatabase();
      const record = await Membership.findOne(
        { registrationReference: ref },
        'registrationReference membershipPlan fitnessGoal status createdAt fullName'
      ).lean();

      if (!record) {
        res.status(404).json({ success: false, error: 'Registration reference not found.' });
        return;
      }

      res.json({
        success: true,
        record: {
          registrationReference: record.registrationReference,
          fullName: record.fullName,
          membershipPlan: record.membershipPlan,
          fitnessGoal: record.fitnessGoal,
          status: record.status,
          createdAt: record.createdAt
        }
      });
    } catch {
      res.status(500).json({ success: false, error: 'Failed to verify reference.' });
    }
  });

  // Production vs Development Vite Middleware
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  } else {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
        watch: process.env.DISABLE_HMR === 'true' ? null : {},
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[FitFlow] Server listening at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('[FitFlow] Server startup failed:', err);
  process.exit(1);
});
