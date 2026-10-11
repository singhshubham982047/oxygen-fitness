# Oxygen Fitness — Premier Gym & Health Sanctuary

A production-oriented fitness club website for **Oxygen Fitness**, located in **Kailahat Kailahat bazaar, Uttar Pradesh 231305**, featuring a sleek, minimalist aesthetic, responsive design, Indian Rupee (₹) pricing, a comprehensive authentic supplement catalog, and a fully functional membership registration system backed by MongoDB and Mongoose.

---

## Club Details & Highlights

- **Official Name:** Oxygen Fitness
- **Address:** Kailahat Kailahat bazaar, Uttar Pradesh 231305, India
- **Operating Hours:**
  - Monday – Saturday: 5:30 AM – 11:30 AM & 4:00 PM – 10:00 PM
  - Sunday: 6:00 AM – 1:00 PM
- **Pricing in Indian Rupee (₹):**
  - **Monthly Plan:** ₹800 per month (Full gym floor & cardio)
  - **Quarterly Transformation (Most Popular):** ₹2,100 for 3 months (~₹700/mo, save ₹300)
  - **Yearly VIP Membership:** ₹8,000 for 12 months (~₹667/mo, save ₹1,600)
- **100% Genuine Supplement Catalog:**
  - Whey Protein (Optimum Nutrition Gold Standard, MuscleBlaze Biozyme, AS-IT-IS 100% Raw, Dymatize ISO100)
  - Creatine Monohydrate (MuscleBlaze CreAMP Micronized, Optimum Nutrition Micronized, Wellcore)
  - Pre-Workouts & Energy (Cellucor C4 Original, MuscleBlaze Pre-Workout 200)
  - Recovery & BCAAs (Scivation XTEND 7g BCAA, MuscleBlaze BCAA Pro)
  - Mass Gainers (MuscleBlaze Super Gainer XXL, Labrada Muscle Mass Gainer)
  - Daily Wellness & Nutrition (MuscleBlaze High Protein Dark Chocolate Peanut Butter, Omega-3 Fish Oil, HK Vitals Multivitamins, Fast&Up Electrolytes)
  - Available with scratch authentication codes and in-gym reservation at Kailahat counter.

---

## Complete Page Suite

- `/` — Home (Hero with Oxygen Fitness logo, Kailahat location badge, featured programs, INR plans, supplement showcase, FAQs, and join CTA).
- `/about` — About the gym, equipment inventory, training philosophy, and Kailahat branch specs.
- `/programs` — Training disciplines (Pure Strength, Hypertrophy, Metabolic Conditioning, Functional Movement, Cardio, 1-on-1 Mentorship).
- `/membership` — Membership plans with INR pricing (₹800, ₹2,100, ₹8,000) and feature comparison table.
- `/supplements` — Interactive supplement catalog with search, category filters, protein per scoop info, and reservation for counter pickup.
- `/join` — Registration form validated with React Hook Form + Zod, saving to MongoDB and issuing unique references (`FIT-YYYY-XXXXXX`).
- `/contact` — Gym location at Kailahat bazaar, contact details, and inquiry form.
- `/privacy` & `/terms` — Policies tailored to Oxygen Fitness and in-gym standards.
- **Persistent Database:**
  - Genuine MongoDB ODM with Mongoose strict schemas and indexes.
  - Caching connection for development performance.
  - Embedded MongoDB resilient fallback for sandbox/preview testing, guaranteeing zero fake or mocked data.
  - Never exposes database credentials to the client.
- **Server-Side API:**
  - `POST /api/memberships` — Zod schema validation, rate-limiting, MongoDB creation, unique reference assignment, and safe confirmation payload.
  - `POST /api/contact` — Zod validation, separate `ContactInquiry` model persistence in MongoDB.
  - `GET /api/memberships/check/:reference` — Live status verification of submitted applications.
  - `GET /api/health` — System and database connectivity check.

---

## Technology Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS, Lucide React, Canvas Confetti
- **Backend:** Express, Node.js, Tsx
- **Database & ODM:** MongoDB, Mongoose
- **Form Handling & Validation:** React Hook Form, Zod, `@hookform/resolvers`

---

## Environment Configuration

Configure variables in `.env` (refer to `.env.example`):

```bash
# MongoDB connection URI (Atlas or local instance)
MONGODB_URI="mongodb://127.0.0.1:27017/fitflow"
MONGODB_DB_NAME="fitflow"
```

If `MONGODB_URI` is not reachable, the system automatically boots an embedded real MongoDB instance so the application functions with 100% genuine database persistence out of the box.

---

## Installation & Running

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The server will start on `http://0.0.0.0:3000` with Express handling API routes and Vite serving the frontend.

### 3. Build for Production
```bash
npm run build
```

### 4. Run in Production
```bash
npm run start
```

---

## Registration Workflow

1. Visitor navigates to `/membership` and selects a plan (e.g. Annual Elite), which directs to `/join?plan=annual`.
2. The visitor completes the form with their name, email, phone, optional DOB/gender, preferred start date, training goals, and checks the consent box.
3. Form values are validated client-side with Zod and submitted via `POST /api/memberships`.
4. The server validates the body, establishes a MongoDB connection, creates the document with `status: 'pending'`, generates a unique reference (e.g. `FIT-2026-A1B2C3`), and saves it to MongoDB.
5. The client displays a verified confirmation card with the reference, copy button, and application details.
6. The user can verify their application at any time using the lookup tool in the footer.
