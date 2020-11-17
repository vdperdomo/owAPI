import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from '../interfaces/IControllerBase.interface'
import CClient from '../models/client/client.model'
import Clients from '../models/client/clients.model'

class ClientsController implements IControllerBase {
    public path = '/clients'
    public router = express.Router()

    private clients = new Clients();
    private client = new CClient();

    constructor() {
        this.initRoutes()
    }

    public initRoutes() {
        this.router.get(this.path + '/:id', this.getClient)
/*         
        this.router.get(this.path, this.getAllClients)
        this.router.put(this.path, this.modifyClient)
        this.router.delete(this.path + '/:id', this.deleteClient) */
        this.router.post(this.path, this.newClient)
    }

    getClient = (req: Request, res: Response) => {
        const id = req.params.id
        let result = this.client.get(id)
        console.log(result)

        if (!result) {
            res.status(404).send({
                'error': 'Client not found!'
            })
        }
        res.send(result);
    }

    newClient = (req: Request, res: Response) => {

        const result = this.client.create(req.body)

        if (!result) {
            res.status(500).send({
                'error': 'Client cannot be created'
            })
        }

        console.log(result)

        res.send(result);
    }

   /*  modifyClient = (req: Request, res: Response) => {
        const result = this.client.modify(req.body)
        if (!result) {
            res.status(500).send({
                'error': 'Client cannot be updated'
            })
        }
        res.send(result);
    }

    deleteClient = (req: Request, res: Response) => {
        const id = +req.params.id;
        const result = this.client.remove(id)
        if (!result) {
            res.status(500).send({
                'error': 'Client cannot be deleted'
            })
        }
        res.send(result);
    }

    getAllClients = (req: Request, res: Response) => {
        const result =  this.clients.getAll();
        if (!result) {
            res.status(404).send({
                'error': 'Clients not found!'
            })
        }
        res.send(result);
    } */
}

export default ClientsController