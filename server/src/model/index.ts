import mongoose, { Schema } from 'mongoose';
import { ISega } from '../interface';

const SegaSchema: Schema<ISega> = new Schema(
    {
        title: { type: String, required: true },
        poster: { type: String, required: true },
        preview: { type: String, required: true },
        gameLink: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ISega>('Sega', SegaSchema);