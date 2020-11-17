import { ExerciseORM, IExercise } from '../../interfaces/IExercise.interface';

class Exercises {

    public getAll(): IExercise[] | any {
        return ExerciseORM.findAll({ raw: true });
    }

    public getAllByRoutine(routineId: number): IExercise[] | any {
        return ExerciseORM.findAll({ where: { routineId: routineId } });
    }
}

export default Exercises;