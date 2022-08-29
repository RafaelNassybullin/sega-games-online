import { Document } from 'mongoose';

export interface ISega extends Document {
  title: string;
  poster: string;
  preview: string,
  gameLink: string
}