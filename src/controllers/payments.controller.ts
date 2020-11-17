import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import Payment from '../models/payment/payment.model'
import Payments from '../models/payment/payments.model'

class PaymentsController implements IControllerBase {  
    public path = '/payments'
    public router = express.Router()

    private payments = new Payments();    
    private payment = new Payment();

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getPayment)
        this.router.get(this.path + '/client/:id', this.getPaymentByClients)
        this.router.get(this.path, this.getAllPayments)
        this.router.put(this.path, this.modifyPayment)
        this.router.delete(this.path + '/:id', this.deletePayment)
        this.router.post(this.path, this.newPayment)
    }

    getPayment = (req: Request, res: Response) => {
        const id = +req.params.i
        let result = this.payment.get(id)

        if (!result) {
            res.status(404).send({
                'error': 'Payment not found!'
            })
        }
        res.send(result);
    }

    newPayment = (req: Request, res: Response) => {
        const result = this.payment.create(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Payment cannot be created'
            })
        }
        res.send(result);
    }

    modifyPayment = (req: Request, res: Response) => {
        const result = this.payment.modify(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Payment cannot be updated'
            })
        }
        res.send(result);
    }

    deletePayment = (req: Request, res: Response) => {
        const id = +req.params.id;
        const result = this.payment.remove(id)
        if (!result) {
            res.status(500).send({
                'error': 'Payment cannot be deleted'
            })
        }
        res.send(result);
    }


    getPaymentByClients = (req: Request, res: Response) => {
        const clientId = +req.params.id
        const result =  this.payments.getAllByClientId(clientId);
        
        if (!result) {
            res.status(404).send({
                'error': 'Payments not found!'
            })
        }
        res.send(result);
    }

    getAllPayments = (req: Request, res: Response) => {
        const result =  this.payments.getAll();
        if (!result) {
            res.status(404).send({
                'error': 'Payments not found!'
            })
        }
        res.send(result);
    }
}

export default PaymentsController