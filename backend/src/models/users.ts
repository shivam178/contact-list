import bcrypt from 'bcryptjs';
import { Document, Model, model, Schema, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface IUsers extends Document {
  createdAt: Date;
  username: string;
  fullName: string;
  email: string;
  subId: string;
  password: string;
  userContacts: Types.ObjectId[]
}

interface IUsersInstance extends IUsers {
  comparePassword: (password: string) => Promise<boolean>;
}

interface UsersModel extends Model<IUsersInstance, {}, IUsers> {}

const usersSchema = new Schema<IUsersInstance, UsersModel>({
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subId: {
    type: String,
    unique: true,
    default: () => uuidv4(),
  },
  password: {
    type: String,
    required: true,
    set: (value: any) => {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(value, salt);
      return hash;
    },
  },
  userContacts: [{
    type: Schema.Types.ObjectId,
    ref: 'user_contacts',
  }],
});

usersSchema.methods.comparePassword = async function ({ password }: { password: string }) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

export const Users = model<IUsersInstance, UsersModel>('users', usersSchema);
