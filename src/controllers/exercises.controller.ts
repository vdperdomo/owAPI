import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import { Exercise } from '../models/exercise/exercise.model'
import Exercises from '../models/exercise/exercises.model'

class ExercisesController implements IControllerBase {
    public path = '/exercises'
    public router = express.Router()

    private Exercises = new Exercises();
    private Exercise = new Exercise();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getExercise)
        this.router.get(this.path, this.getAllExercises)
        this.router.put(this.path, this.modifyExercise)
        this.router.delete(this.path + '/:id', this.deleteExercise)
        this.router.post(this.path, this.newExercise)
    }

    getExercise = async (req: Request, res: Response) => {
        const id = +req.params.id;
        let result = await this.Exercise.get(id);

        if (!result) {
            res.status(404).send({
                'error': 'Exercise not found!'
            })
        }
        res.send(result);
    }

    newExercise = async (req: Request, res: Response) => {
        const result = await this.Exercise.create(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Exercise cannot be created'
            })
        }
        res.send(result);
    }

    modifyExercise = (req: Request, res: Response) => {
        const result = this.Exercise.modify(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Exercise cannot be updated'
            })
        }
        res.send(result);
    }

    deleteExercise = ({ params }: any, res: Response) => {
        const { id } = params;
        const result = this.Exercise.remove(id)
        if (!result) {
            res.status(500).send({
                'error': 'Exercise cannot be deleted'
            })
        }
        res.send(result);
    }


    getAllExercises = (req: Request, res: Response) => {
        console.log("get")
        this.Exercises.getAll()
            .then((result: any) => {
                console.log(result)
                if (!result) {
                    return res.status(404).send({
                        'error': 'Exercises not found!'
                    })
                }
                return res.send(result);
            })
            .catch((err: any) => res.send(err))

    }
}

export default ExercisesController