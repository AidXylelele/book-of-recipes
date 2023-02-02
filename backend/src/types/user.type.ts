import { Document } from 'mongoose';

export interface IUserSignIn extends Document {
  email: string;
  password: string;
}

export interface IUser extends Document {
  email: string;
  password: string;
  avatar: string;
  name: string;
  date?: Date;
}
