import { MeasurementORM, IMeasurement } from '../../interfaces/IMeasurement.interface';

class Measurement {
    constructor() {
    }

    public get(id: number) {
        return MeasurementORM.findByPk(id, { raw: true });
    }

    public create(exercise: IMeasurement) {
        return MeasurementORM.create(exercise)
    }

    public modify(exercise: IMeasurement): boolean {
        //TODO: query
        return true;
    }

    public remove(id: number): boolean {
        //TODO: query
        return true;
    }

}


export { Measurement }