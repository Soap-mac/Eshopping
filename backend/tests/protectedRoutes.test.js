jest.mock('../databases/connection', () => ({}));

const request = require('supertest');
const app = require('../app');

// These confirm the JWT auth middleware is actually wired onto the routes
// that require login - the exact bug class fixed in earlier steps, where
// several routes trusted a spoofable cookie instead of a verified JWT.
describe('Auth-protected routes reject requests with no valid session', () => {
    it('GET /getCart with no cookies at all is rejected', async () => {
        const res = await request(app).get('/getCart');
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/unauthorized/i);
    });

    it('POST /addToCart with no cookies at all is rejected', async () => {
        const res = await request(app)
            .post('/addToCart')
            .send({ productId: 'abc123', quantity: 1 });
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/unauthorized/i);
    });

    it('POST /create-order (checkout) with no cookies at all is rejected', async () => {
        const res = await request(app)
            .post('/create-order')
            .send({ addressId: 'abc123' });
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/unauthorized/i);
    });

    it('rejects a garbage/tampered token instead of crashing', async () => {
        const res = await request(app)
            .get('/getCart')
            .set('Cookie', ['token=not-a-real-jwt']);
        expect(res.status).toBe(401);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/invalid token/i);
    });
});