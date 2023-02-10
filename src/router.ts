import { Router } from 'express';
import { Controllers } from './controllers';

export const RouterInstance = Router();

RouterInstance.get('/users', new Controllers().listUsers);

RouterInstance.get('/products', new Controllers().listProducts);

RouterInstance.post('/value/:userid', new Controllers().getBudgetValue);
