// Unit tests to test the end points of the back-end
// Don't forget to start the backend!


import * as chai from "chai";
import {expect} from "chai";
import {default as chaiHttp, request} from "chai-http";

chai.use(chaiHttp);

// chai.config.truncateThreshold = 0;
const server = 'http://localhost:3000'; // Update this to your API server URL

describe('Library API Tests', () => {
    let userToken;
    let adminToken;
    let userId; // This will be used to store the ID of the user that we create
    let bookId;

    /**
     * User Authentication Tests
     */

    // Register a normal user
    it('should register a new user and return a token', (done) => {
        request.execute(server)
            .post('/api/auth/register')
            .send({
                name: 'Test User',
                email: 'testuser@example.com',
                password: 'password123',
            })
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('token');
                userToken = res.body.token;
                done();
            });
    });

    // Register an admin user
    it('should register a new admin user and return a token', (done) => {
        request.execute(server)
            .post('/api/auth/register')
            .send({
                name: '6ca3363f2a95056f72c506b81369902afe494e7091c7c50344799e79f65430831190d841cddbde4ea2984823077877e05352d89449d431803eff56c7ab7ec0a1',
                email: 'adminuser@example.com',
                password: 'adminpassword123'
            })
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(201);
                expect(res.body).to.have.property('token');
                adminToken = res.body.token;
                done();
            });
    });

    // Login as normal user
    it('should login as a normal user and return a token', (done) => {
        request.execute(server)
            .post('/api/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                email: 'testuser@example.com',
                password: 'password123',
            })
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                userToken = res.body.token;
                expect(res.body).to.have.property('id');
                userId = res.body.id;
                done();
            });
    });

    // Login as admin user
    it('should login as an admin user and return a token', (done) => {
        request.execute(server)
            .post('/api/auth/login')
            .set('Content-Type', 'application/json')
            .send({
                email: 'adminuser@example.com',
                password: 'adminpassword123',
            })
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('token');
                adminToken = res.body.token;
                done();
            });
    });

    /**
     * Book Retrieval Tests
     */

    // Get a list of all books without authentication
    it('should retrieve all available books without authentication', (done) => {
        request.execute(server)
            .get('/api/books')
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                expect(res.body).to.be.an('array');
                done();
            });
    });

    /**
     * Book Addition Tests
     */

    // Attempt to add a book as a normal user (should fail)
    it('should not allow a normal user to add a book', (done) => {
        request.execute(server)
            .post('/api/books')
            .set('x-auth-token', userToken)
            .send({
                title: 'Unauthorized Book',
                author: 'Unknown Author',
            })
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(400);
                done();
            });
    });

    // Add a new book as an admin user
    it('should allow an admin user to add a new book', (done) => {
        request.execute(server)
            .post('/api/books')
            .set('x-auth-token', adminToken)
            .send({
                title: 'Authorized Book',
                author: 'Admin Author',
            })
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('_id');
                bookId = res.body._id;
                done();
            });
    });

    /**
     * Book Lending Tests
     */

    // Lend a book as a normal user
    it('should allow a user to lend a book', (done) => {
        request.execute(server)
            .put(`/api/books/borrow/${bookId}`)
            .set('x-auth-token', userToken)
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                done();
            });
    });

    // Return a book as a normal user
    it('should allow a user to return a book', (done) => {
        request.execute(server)
            .put(`/api/books/return/${bookId}`)
            .set('x-auth-token', userToken)
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                done();
            });
    });

    /**
     * Book Deletion Tests
     */

    // Attempt to delete a book as a normal user (should fail)
    it('should not allow a normal user to delete a book', (done) => {
        request.execute(server)
            .delete(`/api/books/${bookId}`)
            .set('x-auth-token', userToken)
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(400);
                done();
            });
    });

    // Delete a book as an admin user
    it('should allow an admin user to delete a book', (done) => {
        request.execute(server)
            .delete(`/api/books/delete/${bookId}`)
            .set('x-auth-token', adminToken)
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                done();
            });
    });

    // Delete a user as an admin user
    it('should allow an admin user to delete a user', (done) => {
        request.execute(server)
            .delete(`/api/users/delete/${userId}`)
            .set('x-auth-token', adminToken)
            .end((err, res) => {
                if (res.body.msg) console.log("    Message from server: ", res.body.msg);
                expect(res).to.have.status(200);
                done();
            });
    });
});

