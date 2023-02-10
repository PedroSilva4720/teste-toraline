import { BadRequestError } from './errors';
import { Product, User } from './index.d';
import { Repositories } from './repositories';
export class Models {
  async listUsers() {
    const Repository = new Repositories();

    const users: User[] = await Repository.listUsers();

    return users;
  }

  async listProducts() {
    const Repository = new Repositories();

    const products: Product[] = await Repository.listProducts();

    return products;
  }

  async getBudgetValue(userId: number, productsIds: number[]) {
    if (!productsIds.every(item => typeof item === 'number')) {
      throw new BadRequestError('Invalid product data');
    }

    if (Number.isNaN(Number(userId))) {
      throw new BadRequestError('Invalid user data');
    }

    const Repository = new Repositories();

    const user: User = await Repository.getUserById(userId);

    const products: Product[] = await Promise.all(
      productsIds.map(async id => await Repository.getProductById(id))
    );

    const value = products.reduce(
      (amount, current) => (current.price * user.tax) / 100 + amount,
      0
    );

    return value;
  }
}
