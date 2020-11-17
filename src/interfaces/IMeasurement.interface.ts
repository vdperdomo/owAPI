import mongoose, { Schema, Document } from 'mongoose';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/connection.mysql';

const measurementSchema: Schema = new Schema({
});

export default mongoose.model<IMeasurement>('Measurement', measurementSchema);

interface IMeasurement extends Document {
    id: string
    weight: number,
    waist: number,
    chest: number,
    hip: number,
    leg: number,
    arm: number,
    studentId: number,
    date: Date,
}

class MeasurementORM extends Model { }

MeasurementORM.init({
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    waist: DataTypes.INTEGER,
    chest: DataTypes.INTEGER,
    hip: DataTypes.INTEGER,
    leg: DataTypes.INTEGER,
    arm: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER,
    date: DataTypes.DATE,
},
    {
        sequelize,
        modelName: 'Measurement'
    }
);

export { IMeasurement, MeasurementORM }

