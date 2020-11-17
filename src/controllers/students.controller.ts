import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import { Student } from '../models/student/student.model'
import Students from '../models/student/students.model'

class StudentsController implements IControllerBase {
    public path = '/students'
    public router = express.Router()

    private Students = new Students();
    private Student = new Student();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getStudent)
        this.router.get(this.path, this.getAllStudents)
        this.router.put(this.path, this.modifyStudent)
        this.router.delete(this.path + '/:id', this.deleteStudent)
        this.router.post(this.path, this.newStudent)
    }

    getStudent = async (req: Request, res: Response) => {
        const id = +req.params.id;
        let result = await this.Student.get(id);

        if (!result) {
            res.status(404).send({
                'error': 'Student not found!'
            })
        }
        res.send(result);
    }

    newStudent = async (req: Request, res: Response) => {
        const result = await this.Student.create(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Student cannot be created'
            })
        }
        res.send(result);
    }

    modifyStudent = (req: Request, res: Response) => {
        const result = this.Student.modify(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Student cannot be updated'
            })
        }
        res.send(result);
    }

    deleteStudent = ({ params }: any, res: Response) => {
        const { id } = params;
        const result = this.Student.remove(id)
        if (!result) {
            res.status(500).send({
                'error': 'Student cannot be deleted'
            })
        }
        res.send(result);
    }


    getAllStudents = (req: Request, res: Response) => {
        console.log("get")
        this.Students.getAll()
            .then((result: any) => {
                console.log(result)
                if (!result) {
                    return res.status(404).send({
                        'error': 'Students not found!'
                    })
                }
                return res.send(result);
            })
            .catch((err: any) => res.send(err))

    }
}

export default StudentsController