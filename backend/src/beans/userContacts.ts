import { Document, Model, model, Schema, Types } from 'mongoose';

export interface IUserContacts extends Document {
  createdAt: Date;
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  userId: Types.ObjectId;
}

const userContactsSchema = new Schema<IUserContacts>({
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date(),
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    default: () => null,
  },
  mobile: {
    type: String,
    unique: true,
    default: () => null,
  },
  userId: {
    type: Schema.Types.ObjectId,
  },
});

export const UserContacts: Model<IUserContacts> = model<IUserContacts>(
  'user_contacts',
  userContactsSchema
);
