import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import { Routine } from '../models/routine/routine.model'
import Routines from '../models/routine/routines.model'

class RoutinesController implements IControllerBase {
    public path = '/routines'
    public router = express.Router()

    private Routines = new Routines();
    private Routine = new Routine();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getRoutine)
        this.router.get(this.path, this.getAllRoutines)
        this.router.put(this.path, this.modifyRoutine)
        this.router.delete(this.path + '/:id', this.deleteRoutine)
        this.router.post(this.path, this.newRoutine)
    }

    getRoutine = async (req: Request, res: Response) => {
        const id = +req.params.id;
        let result = await this.Routine.get(id);

        if (!result) {
            res.status(404).send({
                'error': 'Routine not found!'
            })
        }
        res.send(result);
    }

    newRoutine = async (req: Request, res: Response) => {
        const result = await this.Routine.create(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Routine cannot be created'
            })
        }
        res.send(result);
    }

    modifyRoutine = (req: Request, res: Response) => {
        const result = this.Routine.modify(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Routine cannot be updated'
            })
        }
        res.send(result);
    }

    deleteRoutine = ({ params }: any, res: Response) => {
        const { id } = params;
        const result = this.Routine.remove(id)
        if (!result) {
            res.status(500).send({
                'error': 'Routine cannot be deleted'
            })
        }
        res.send(result);
    }


    getAllRoutines = (req: Request, res: Response) => {
        this.Routines.getAllGeneric()
            .then((result: any) => {
                console.log(result)
                if (!result) {
                    return res.status(404).send({
                        'error': 'Routines not found!'
                    })
                }
                return res.send(result);
            })
            .catch((err: any) => res.send(err))

    }
}

export default RoutinesController