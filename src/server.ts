import App from './app'

import * as bodyParser from 'body-parser'
/* import loggerMiddleware from './middleware/logger'
import PaymentsController from './controllers/payments.controller';*/
import ClientsController from './controllers/clients.controller';
import ExercisesController from './controllers/exercises.controller';


const app = new App({
    port: 4000,
    controllers: [

        //can I use singleton pattern here?
        //new PaymentsController(),
        new ClientsController(),
        new ExercisesController()
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        //loggerMiddleware
    ]
})

app.listen();
