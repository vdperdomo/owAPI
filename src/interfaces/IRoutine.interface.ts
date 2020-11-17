import mongoose, { Schema, Document } from 'mongoose';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/connection.mysql';

const routineSchema: Schema = new Schema({
});

export default mongoose.model<IRoutine>('Routine', routineSchema);

interface IRoutine extends Document {
    id: string
    name: string
    studentId: number,
    startDate: Date,
    endDate: Date
}

class RoutineORM extends Model { }

RoutineORM.init({
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    studentId: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
},
    {
        sequelize,
        modelName: 'Routine'
    }
);

export { IRoutine, RoutineORM }

