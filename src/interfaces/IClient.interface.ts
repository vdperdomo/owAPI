import mongoose, { Schema, Document } from 'mongoose';

const clientSchema: Schema = new Schema({
    _id: mongoose.Types.ObjectId,
    firstname: { type: String },
    lastname: { type: String },
    documentType: { type: Number },
    documentNumber: { type: Number },
    medicalHistory: String,
    bloodType: String,
    address: { type: String },
    phone: Number,
    mail: String,
});

export interface IClient extends Document {
    id: string
    firstname: string
    lastname: string
    documentType: number
    documentNumber: number
    medicalHistory: string
    bloodType: string
    address: string
    phone: number
    mail: string
}

export default mongoose.model<IClient>('Client', clientSchema);