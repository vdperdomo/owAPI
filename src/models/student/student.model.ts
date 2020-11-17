import { StudentORM, IStudent } from '../../interfaces/IStudent.interface';

class Student {
    constructor() {
    }

    public get(id: number) {
        return StudentORM.findByPk(id, { raw: true });
    }

    public create(exercise: IStudent) {
        return StudentORM.create(exercise)
    }

    public modify(exercise: IStudent) {
        return StudentORM.update(exercise, { where: { id: exercise.id } })
    }

    public remove(id: number) {
        return StudentORM.destroy({ where: { id: id } })
    }

}


export { Student }