import { MeasurementORM, IMeasurement } from '../../interfaces/IMeasurement.interface';

class Measurements {

    public getAllByStudent(studentId: number): IMeasurement[] | any {
        return MeasurementORM.findAll({ where: { studentId: studentId } });
    }

    public getAllByStudentAndDate(studentId: number, startDate: Date, endDate: Date): IMeasurement[] | any {
        return MeasurementORM.findAll(
            {
                where:
                {
                    studentId: studentId,
                    startDate: {
                        $gte: startDate
                    },
                    endDate: {
                        $gte: endDate
                    }
                },
            }
        );
    }
}

export default Measurements;