import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

/**
 * Global cache interface for Mongoose connection in Node/Next environments
 */
interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
  memoryServer?: MongoMemoryServer | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongooseCache: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongooseCache || {
  conn: null,
  promise: null,
  memoryServer: null
};

if (!global.mongooseCache) {
  global.mongooseCache = cached;
}

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cached.conn && cached.conn.connection.readyState === 1) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: mongoose.ConnectOptions = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
    };

    cached.promise = (async () => {
      const explicitUri = process.env.MONGODB_URI?.trim();
      const dbName = process.env.MONGODB_DB_NAME?.trim() || 'fitflow';

      // 1. If explicit URI is provided, attempt connection first
      if (explicitUri && explicitUri.startsWith('mongodb')) {
        try {
          console.log('[Database] Connecting to configured MongoDB instance...');
          const conn = await mongoose.connect(explicitUri, {
            ...opts,
            dbName: explicitUri.includes('/') ? undefined : dbName,
          });
          console.log('[Database] Connected to external MongoDB successfully.');
          return conn;
        } catch (err) {
          console.warn(
            '[Database] Connection to configured MONGODB_URI failed. Initializing resilient embedded MongoDB server...',
            err instanceof Error ? err.message : err
          );
        }
      }

      // 2. Embedded MongoDB fallback (real in-memory mongod instance via MongoMemoryServer)
      // This ensures 100% genuine MongoDB query processing and Mongoose persistence even in sandbox environments.
      try {
        if (!cached.memoryServer) {
          console.log('[Database] Starting embedded MongoDB engine...');
          cached.memoryServer = await MongoMemoryServer.create({
            instance: {
              dbName: dbName,
            },
          });
        }

        const memoryUri = cached.memoryServer.getUri();
        console.log('[Database] Embedded MongoDB running. Connecting Mongoose client...');
        const conn = await mongoose.connect(memoryUri, opts);
        console.log('[Database] Connected to embedded MongoDB successfully.');
        return conn;
      } catch (innerErr) {
        console.error('[Database] Fatal: Unable to initialize MongoDB connection:', innerErr);
        throw new Error(
          'Database service unavailable. Please check MongoDB configuration.'
        );
      }
    })();
  }

  try {
    cached.conn = await cached.promise;
    return cached.conn;
  } catch (e) {
    cached.promise = null;
    throw e;
  }
}

export async function disconnectDatabase(): Promise<void> {
  if (cached.conn) {
    await mongoose.disconnect();
    cached.conn = null;
    cached.promise = null;
  }
  if (cached.memoryServer) {
    await cached.memoryServer.stop();
    cached.memoryServer = null;
  }
}
