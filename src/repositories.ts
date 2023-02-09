import { axiosInstance } from './axios';
import { User, Product } from './index';

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

  async getUserById(userId: number) {
    const user: User = await axiosInstance
      .get(`/users/${userId}`)
      .then(data => data.data);

    return user;
  }

  async getProductById(productId: number) {
    const product: Product = await axiosInstance
      .get(`/products/${productId}`)
      .then(data => data.data);

    return product;
  }
}
