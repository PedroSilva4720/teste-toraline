import express from 'express';
import { RouterInstance } from './router';

const server = express();

server.use(express.json());

server.use(RouterInstance);

server.listen(process.env.PORT || 9001);
