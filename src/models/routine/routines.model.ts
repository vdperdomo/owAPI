import { RoutineORM, IRoutine } from '../../interfaces/IRoutine.interface';

class Routines {

    public getAllGeneric(): IRoutine[] | any {
        return RoutineORM.findAll({ raw: true });
    }

    public getAllByStudent(studentId: number): IRoutine[] | any {
        return RoutineORM.findAll({ where: { studentId: studentId } });
    }

    public getAllByStudentAndDate(studentId: number, startDate: Date, endDate: Date): IRoutine[] | any {
        return RoutineORM.findAll(
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

export default Routines;