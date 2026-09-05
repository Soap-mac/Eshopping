jest.mock('../models/user');
jest.mock('../databases/connection', () => ({}));

const request = require('supertest');
const app = require('../app');
const user = require('../models/user');
const bcrypt = require('bcryptjs');

describe('POST /signup', () => {
    afterEach(() => jest.clearAllMocks());

    it('rejects a missing name', async () => {
        const res = await request(app)
            .post('/signup')
            .send({ email: 'test@example.com', password: 'password123' });
        expect(res.status).toBe(400);
        expect(res.body.success).toBe(false);
    });

    it('rejects an invalid email', async () => {
        const res = await request(app)
            .post('/signup')
            .send({ name: 'Test', email: 'not-an-email', password: 'password123' });
        expect(res.status).toBe(400);
    });

    it('rejects a short password', async () => {
        const res = await request(app)
            .post('/signup')
            .send({ name: 'Test', email: 'test@example.com', password: 'ab' });
        expect(res.status).toBe(400);
    });

    it('rejects a duplicate email', async () => {
        user.findOne.mockResolvedValue({ _id: '1', email: 'test@example.com' });
        const res = await request(app)
            .post('/signup')
            .send({ name: 'Test', email: 'test@example.com', password: 'password123' });
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/already registered/i);
    });

    it('creates a new user when everything is valid', async () => {
        user.findOne.mockResolvedValue(null);
        user.create.mockResolvedValue({ _id: '1', userName: 'Test', email: 'test@example.com' });
        const res = await request(app)
            .post('/signup')
            .send({ name: 'Test', email: 'test@example.com', password: 'password123' });
        expect(res.body.success).toBe(true);
    });
});

describe('POST /login', () => {
    afterEach(() => jest.clearAllMocks());

    it('rejects missing credentials', async () => {
        const res = await request(app).post('/login').send({ email: 'test@example.com' });
        expect(res.status).toBe(400);
    });

    it('rejects an unknown email', async () => {
        user.findOne.mockResolvedValue(null);
        const res = await request(app)
            .post('/login')
            .send({ email: 'nobody@example.com', password: 'password123' });
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/not found/i);
    });

    it('rejects a wrong password', async () => {
        const hashed = await bcrypt.hash('correct-password', 10);
        user.findOne.mockResolvedValue({
            _id: '1', email: 'test@example.com', password: hashed, save: jest.fn()
        });
        const res = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'wrong-password' });
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/doesnt match/i);
    });

    it('logs in successfully with correct credentials', async () => {
        const hashed = await bcrypt.hash('correct-password', 10);
        user.findOne.mockResolvedValue({
            _id: '1', email: 'test@example.com', password: hashed, role: 'user', save: jest.fn()
        });
        const res = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'correct-password' });
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.headers['set-cookie']).toBeDefined();
    });
});