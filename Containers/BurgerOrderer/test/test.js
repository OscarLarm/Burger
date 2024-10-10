//use page in function orderPage   BurgerOrder/index.js

var chai = require('chai')
var chaiHttp = require('chai-http')
var app = require('../index.js')

chai.use(chaiHttp)
chai.should()

describe('Homepage', () => {
    it('should show the Hello World message', done => {
        chai
        .request(app)
        .get('/test')
        .end((error, response) => {
            response.text.should.equal('Hello World!')
            done()
        })
    })
})
describe('Orderpage', () =>{
    it('Send order', done =>{
        chai
            .request(app)
            .post("/order")
            .send({burger: 'Original Kidney Killer'})
            .end((error, response) => {
                if (error) return done(error);
                response.should.be.a('String');
            done(); 
        })
    })
})