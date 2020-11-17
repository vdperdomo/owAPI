import mongoose, { Schema, Document } from 'mongoose';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../databases/connection.mysql';

const studentSchema: Schema = new Schema({
});

export default mongoose.model<IStudent>('Student', studentSchema);

interface IStudent extends Document {
    id: string
    userId: number,
}

class StudentORM extends Model { }

StudentORM.init({
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
},
    {
        sequelize,
        modelName: 'Student'
    }
);

export { IStudent, StudentORM }

