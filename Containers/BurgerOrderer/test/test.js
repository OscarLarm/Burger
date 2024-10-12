//use page in function orderPage   BurgerOrder/index.js
// var mongoose = require('mongoose')
var chai = require('chai')
var chaiHttp = require('chai-http')
var {app, connectToDB} = require('../index.js')
var assert = chai.assert;
var expect = chai.expect;
chai.use(chaiHttp)
chai.should()

describe('Checking burgerOrder response', () =>{
    it('Testing correct input-format', done =>{
        chai
            .request(app)
            .post("/order")
            .send({burger: 'Original Kidney Killer'})
            .end((error, response) => {
                if (error){
                    console.log(error)
                }
                response.text.should.include('Original Kidney Killer');
                response.text.should.be.a('string')
            done(); 
        })
    })
    it('Testing wrong input-format', done => {
        chai
            .request(app)
            .post('/order')
            .send("Original Kidney Killer")
            .end((error, response) => {
                if (error) return done(error)
                response.text.should.not.include('Original Kidney Killer')                    
            })
            done();
    })
})

// describe('Check database connection', () => {

//     it('Testing connection to Database', done => {
//         connectToDB()
//         done()
//         })
//     })