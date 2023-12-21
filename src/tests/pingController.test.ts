import request from 'supertest';
import app from '../app';  // import my Express app

describe('GET /api/ping', () => {
  it('responds with pong', async () => {
    const response = await request(app).get('/api/ping');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe('pong');
  });
});