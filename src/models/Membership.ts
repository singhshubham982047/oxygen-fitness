import mongoose, { Schema, Document, Model } from 'mongoose';
import { MembershipPlan, FitnessGoal, ExperienceLevel, RegistrationStatus } from '../types/index.ts';

export interface IMembership extends Document {
  registrationReference: string;
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth?: string;
  gender?: string;
  membershipPlan: MembershipPlan;
  fitnessGoal: FitnessGoal;
  experienceLevel: ExperienceLevel;
  preferredStartDate?: string;
  additionalNotes?: string;
  consentAccepted: boolean;
  status: RegistrationStatus;
  createdAt: Date;
  updatedAt: Date;
}

const MembershipSchema = new Schema<IMembership>(
  {
    registrationReference: {
      type: String,
      required: true,
      unique: true,
      index: true,
      uppercase: true,
      trim: true
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      maxlength: [100, 'Full name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      index: true,
      maxlength: [120, 'Email cannot exceed 120 characters']
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      maxlength: [25, 'Phone number cannot exceed 25 characters']
    },
    dateOfBirth: {
      type: String,
      trim: true,
      default: null
    },
    gender: {
      type: String,
      trim: true,
      maxlength: [50, 'Gender cannot exceed 50 characters'],
      default: null
    },
    membershipPlan: {
      type: String,
      required: true,
      enum: {
        values: ['monthly', 'quarterly', 'annual'],
        message: '{VALUE} is not a valid membership plan'
      },
      default: 'monthly'
    },
    fitnessGoal: {
      type: String,
      required: true,
      enum: {
        values: ['muscle_building', 'weight_loss', 'general_fitness', 'strength_training'],
        message: '{VALUE} is not a valid fitness goal'
      },
      default: 'muscle_building'
    },
    experienceLevel: {
      type: String,
      required: true,
      enum: {
        values: ['beginner', 'intermediate', 'advanced'],
        message: '{VALUE} is not a valid experience level'
      },
      default: 'beginner'
    },
    preferredStartDate: {
      type: String,
      trim: true,
      default: null
    },
    additionalNotes: {
      type: String,
      trim: true,
      maxlength: [1000, 'Additional notes cannot exceed 1,000 characters'],
      default: null
    },
    consentAccepted: {
      type: Boolean,
      required: [true, 'Consent acceptance is required'],
      validate: {
        validator: (v: boolean) => v === true,
        message: 'Terms and Privacy Policy consent must be accepted'
      }
    },
    status: {
      type: String,
      required: true,
      enum: ['pending', 'reviewed', 'confirmed', 'cancelled'],
      default: 'pending',
      index: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

// Indexes for query performance
MembershipSchema.index({ createdAt: -1 });
MembershipSchema.index({ email: 1, createdAt: -1 });

export const Membership: Model<IMembership> =
  mongoose.models.Membership || mongoose.model<IMembership>('Membership', MembershipSchema);
