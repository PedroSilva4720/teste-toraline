import express from 'express';

const server = express();

server.use(express.json());

server.get('/', (req, res) => res.send('olá mundo'));

server.listen(process.env.PORT || 9001);
