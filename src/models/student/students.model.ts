import { StudentORM, IStudent } from '../../interfaces/IStudent.interface';

class Students {

    public getAll(): IStudent[] | any {
        return StudentORM.findAll({ raw: true });
    }
}

export default Students;