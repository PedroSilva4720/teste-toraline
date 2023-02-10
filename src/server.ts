import 'express-async-errors';

import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { RouterInstance } from './router';
import { ErrorMIddleware } from './middlewares';
import swaggerDocument from './swagger.json';

export const server = express();

server.use(express.json());

server.use(RouterInstance);

server.use(ErrorMIddleware);

server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
