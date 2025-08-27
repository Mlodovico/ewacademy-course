const {describe, it, after, before} = require('mocha');
const supertest = require('supertest');
const assert = require('assert');


describe('API Suite Test', () => {
    let app;
    before((done) => {
        app = require('./api');
        app.once('listening', done);
    });
    
    after((done) => app.close(done));

    describe('/contact:get', () => {
        it('should request the contact route and return HTTP Status 200', async () => {
            const response = await supertest(app)
                .get('/contact')
                .expect(200)

                assert.strictEqual(response.text, 'Contact us page');
        });
    });

    describe('/login:post', () => {
        it('should request the contact page and return HTTP Status 200', async () => {
            const response = await supertest(app)
                .post('/login')
                .send({ username: 'MuriloLodovico', password: '123'})
                .expect(200)

                assert.strictEqual(response.text, 'Login successful');
        });

        it('should request the contact page and return HTTP Status 401', async () => {
            const response = await supertest(app)
                .post('/login')
                .send({ username: 'johnDoe', password: '123'})
                .expect(401)

                assert.ok(response.unauthorized)
                assert.strictEqual(response.text, '{"error":"Login failed"}');
        });
    });
})