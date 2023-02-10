import { User, Product } from './index.d';
import { Request, Response } from 'express';
import { Models } from './models';

export class Controllers {
  async listUsers(req: Request, res: Response) {
    const Model = new Models();

    const users: User[] = await Model.listUsers();

    return res.json(users);
  }

  async listProducts(req: Request, res: Response) {
    const Model = new Models();

    const products: Product[] = await Model.listProducts();

    return res.json(products);
  }

  async getBudgetValue(req: Request, res: Response) {
    const { userid } = req.params;

    const { productsIds } = req.body;

    const Model = new Models();

    const value = await Model.getBudgetValue(
      userid as unknown as number,
      productsIds
    );

    return res.json({ value });
  }
}
