import request from 'supertest';

import { server } from '../server';

describe('Test routes', () => {
  it('should list users', async () => {
    const res = await request(server).get('/users');

    expect(res.statusCode).toEqual(200);

    expect(typeof res.body[0].id).toBe('number');
    expect(typeof res.body[0].name).toBe('string');
    expect(res.body[0].tax).toBeGreaterThanOrEqual(10);
    expect(res.body[0].tax).toBeLessThanOrEqual(200);
  });

  it('should list products', async () => {
    const res = await request(server).get('/products');

    expect(res.statusCode).toEqual(200);

    expect(typeof res.body[0].id).toBe('number');
    expect(typeof res.body[0].name).toBe('string');
    expect(res.body[0].price).toBeGreaterThanOrEqual(10);
    expect(res.body[0].price).toBeLessThanOrEqual(15000);
  });

  it('should return budget value passing user id and products ids', async () => {
    const userId = 1;

    const productsIds = [1, 2, 3];

    const expectedValue = 11348.35;

    const res = await request(server)
      .post(`/value/${userId}`)
      .send({ productsIds });

    expect(res.body.value).toEqual(expectedValue);
  });
});
