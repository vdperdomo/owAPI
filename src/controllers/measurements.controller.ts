import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import { Measurement } from '../models/measurement/measurement.model'
import Measurements from '../models/measurement/measurements.model'

class MeasurementsController implements IControllerBase {
    public path = '/measurements'
    public router = express.Router()

    private Measurements = new Measurements();
    private Measurement = new Measurement();

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getMeasurement)
        /* this.router.get(this.path, this.getAllMeasurements) */
        this.router.put(this.path, this.modifyMeasurement)
        this.router.delete(this.path + '/:id', this.deleteMeasurement)
        this.router.post(this.path, this.newMeasurement)
    }

    getMeasurement = async (req: Request, res: Response) => {
        const id = +req.params.id;
        let result = await this.Measurement.get(id);

        if (!result) {
            res.status(404).send({
                'error': 'Measurement not found!'
            })
        }
        res.send(result);
    }

    newMeasurement = async (req: Request, res: Response) => {
        const result = await this.Measurement.create(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Measurement cannot be created'
            })
        }
        res.send(result);
    }

    modifyMeasurement = (req: Request, res: Response) => {
        const result = this.Measurement.modify(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Measurement cannot be updated'
            })
        }
        res.send(result);
    }

    deleteMeasurement = ({ params }: any, res: Response) => {
        const { id } = params;
        const result = this.Measurement.remove(id)
        if (!result) {
            res.status(500).send({
                'error': 'Measurement cannot be deleted'
            })
        }
        res.send(result);
    }


    /*     getAllMeasurements = (req: Request, res: Response) => {
            this.Measurements.getAllGeneric()
                .then((result: any) => {
                    console.log(result)
                    if (!result) {
                        return res.status(404).send({
                            'error': 'Measurements not found!'
                        })
                    }
                    return res.send(result);
                })
                .catch((err: any) => res.send(err))
    
        } */
}

export default MeasurementsController