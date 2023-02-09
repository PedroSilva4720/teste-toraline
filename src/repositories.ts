import { axiosInstance } from './axios';

type User = {
  name: string;
  tax: number;
};

type Product = {
  name: string;
  price: number;
};

export class Repositories {
  async listUsers() {
    const users: User[] = await axiosInstance
      .get('/users')
      .then(data => data.data);

    return users;
  }

  async listProducts() {
    const products: Product[] = await axiosInstance
      .get('/products')
      .then(data => data.data);

    return products;
  }

  async getBudgetValue(userId: number, productsIds: number[]) {
    const user: User = await axiosInstance
      .get(`/users/${userId}`)
      .then(data => data.data);

    const products: Product[] = await Promise.all(
      productsIds.map(
        async id =>
          await axiosInstance.get(`/products/${id}`).then(data => data.data)
      )
    );

    const value = products.reduce(
      (amount, current) => (current.price * user.tax) / 100 + amount,
      0
    );

    return value;
  }
}
