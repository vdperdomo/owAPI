import { ExerciseORM, IExercise } from '../../interfaces/IExercise.interface';

class Exercise {
    constructor() {
    }

    public get(id: number) {
        return ExerciseORM.findByPk(id, { raw: true });
    }

    public create(exercise: IExercise) {
        return ExerciseORM.create(exercise)
    }

    public modify(exercise: IExercise): boolean {
        //TODO: query
        return true;
    }

    public remove(id: number): boolean {
        //TODO: query
        return true;
    }

}


export { Exercise }