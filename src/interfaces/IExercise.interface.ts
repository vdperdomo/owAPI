import mongoose, { Schema, Document } from 'mongoose';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/connection.mysql';

const exerciseSchema: Schema = new Schema({
});

export default mongoose.model<IExercise>('Exercise', exerciseSchema);

export interface IExercise extends Document {
    id: string
    name: string
    description: string
    video: string
}

class ExerciseORM extends Model { }

ExerciseORM.init({
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    video: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'Exercise'
    }
);

export { ExerciseORM }

