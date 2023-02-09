import { Router } from 'express';

export const RouterInstance = Router();

RouterInstance.get('/users');

RouterInstance.get('/products');

RouterInstance.post('/value/:userid');
