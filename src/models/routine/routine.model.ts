import { RoutineORM, IRoutine } from '../../interfaces/IRoutine.interface';

class Routine {
    constructor() {
    }

    public get(id: number) {
        return RoutineORM.findByPk(id, { raw: true });
    }

    public create(exercise: IRoutine) {
        return RoutineORM.create(exercise)
    }

    public modify(exercise: IRoutine): boolean {
        //TODO: query
        return true;
    }

    public remove(id: number): boolean {
        //TODO: query
        return true;
    }

}


export { Routine }