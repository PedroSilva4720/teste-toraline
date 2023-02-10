import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import { RouterInstance } from './router';
import { ErrorMIddleware } from './middlewares';

const server = express();

server.use(express.json());

server.use(RouterInstance);

server.use(ErrorMIddleware);

server.listen(process.env.PORT || 9001);
