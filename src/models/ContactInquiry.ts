import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IContactInquiry extends Document {
  inquiryReference: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'new' | 'in_progress' | 'resolved';
  ipAddress?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactInquirySchema = new Schema<IContactInquiry>(
  {
    inquiryReference: {
      type: String,
      required: true,
      unique: true,
      index: true,
      uppercase: true,
      trim: true
    },
    name: {
      type: String,
      required: [true, 'Contact name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      trim: true,
      lowercase: true,
      index: true,
      maxlength: [120, 'Email cannot exceed 120 characters']
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [150, 'Subject cannot exceed 150 characters']
    },
    message: {
      type: String,
      required: [true, 'Message is required'],
      trim: true,
      maxlength: [2000, 'Message cannot exceed 2000 characters']
    },
    status: {
      type: String,
      enum: ['new', 'in_progress', 'resolved'],
      default: 'new',
      index: true
    },
    ipAddress: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

ContactInquirySchema.index({ createdAt: -1 });

export const ContactInquiry: Model<IContactInquiry> =
  mongoose.models.ContactInquiry ||
  mongoose.model<IContactInquiry>('ContactInquiry', ContactInquirySchema);
