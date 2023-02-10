import 'express-async-errors';

import express, { Request, Response, NextFunction } from 'express';
import { RouterInstance } from './router';
import { ErrorMIddleware } from './middlewares';

export const server = express();

server.use(express.json());

server.use(RouterInstance);

server.use(ErrorMIddleware);
