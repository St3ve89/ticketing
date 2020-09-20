import request from 'supertest';
import { it } from '@jest/globals';
import { app } from '../../app';

it('should return a 201 on successful signup', async () => {
  return request(app)
    .post('/api/users/signup')
    .send({
      email: 'test@test.com',
      password: 'password',
    })
    .expect(201);
});
