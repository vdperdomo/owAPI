import express from 'express';
import { Application } from 'express';
import { sequelize } from './databases/connection.mysql';
import cors from 'cors';

class App {
    public app: Application
    public port: number
    public connection: any;

    constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
        this.app = express();
        this.app.use(cors({
            origin: '*'
        }));

        this.port = appInit.port

        this.initDBConnection();
        this.middlewares(appInit.middleWares)
        this.routes(appInit.controllers)
    }

    private initDBConnection() {
        sequelize.sync({ force: false })
            .then(() => {
                console.log("database connected")
            })
            .catch((error: any) => {
                console.log(error)
            })
    }

    private middlewares(middleWares: { forEach: (arg0: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    //Facade pattern
    private routes(controllers: { forEach: (arg0: (controller: any) => void) => void; }) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router)
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App