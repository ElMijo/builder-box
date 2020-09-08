import supertest from "supertest"
import app from '../../../src/bootstrap'


describe("Testing Hello resource...", () => {
    test("Test get a greeting when  not given a name", (done) => {
        supertest(app.getEngine())
            .get('/hello')
            .expect(200, { message: 'Hi stranger!!'}, done)
    })
    test("Test get a greeting when givena  name", (done) => {
        supertest(app.getEngine())
            .get('/hello/Paul')
            .expect(200, { message: 'Hi Paul!!'}, done)
    })
})
