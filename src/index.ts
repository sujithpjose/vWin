require('newrelic');
import express, { Express, Request, Response } from "express";
import { createServer } from 'http';

import errorMiddleware from './middleware/error.middleware';
import { Scheduler } from './service/scheduler.service';

const scheduler = new Scheduler();

const app: Express = express();
const port = process.env.PORT || 3000;

scheduler.start();

app.use(errorMiddleware);
app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to We Win Together!");
});

createServer(app)
    .listen(
        port,
        () => console.info(`Server running on port ${port}:`)
    );

