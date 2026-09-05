jest.mock('../models/user');
jest.mock('../models/orders');
jest.mock('../databases/connection', () => ({}));

const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const user = require('../models/user');
const Orders = require('../models/orders');

const signToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });

describe('GET /getDashboardStats', () => {
    afterEach(() => jest.clearAllMocks());

    it('rejects requests with no token', async () => {
        const res = await request(app).get('/getDashboardStats');
        expect(res.body.success).toBe(false);
    });

    it('rejects a logged-in non-admin user', async () => {
        const token = signToken({ id: '1', email: 'user@example.com', role: 'user' });
        const res = await request(app)
            .get('/getDashboardStats')
            .set('Cookie', [`token=${token}`]);
        expect(res.status).toBe(403);
        expect(res.body.success).toBe(false);
    });

    it('returns real, computed stats for an admin', async () => {
        Orders.find.mockResolvedValue([
            { totalAmount: 500, paymentStatus: 'completed' },
            { totalAmount: 300, paymentStatus: 'pending' },
        ]);
        user.countDocuments.mockResolvedValue(10);

        const token = signToken({ id: '1', email: 'admin@example.com', role: 'admin' });
        const res = await request(app)
            .get('/getDashboardStats')
            .set('Cookie', [`token=${token}`]);

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.stats.sales.value).toBe(800);
        expect(res.body.stats.revenue.value).toBe(500);
        expect(res.body.stats.newOrders.value).toBe(2);
        expect(res.body.stats.customers.value).toBe(10);
        expect(res.body.chart).toHaveLength(12);
        expect(res.body.chart[0]).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                TotalSales: 800,
                TotalUser: 10,
            })
        );
    });
});