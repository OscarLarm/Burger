//use page in function orderPage   BurgerOrder/index.js
// var mongoose = require('mongoose')
var chai = require('chai')
var chaiHttp = require('chai-http')
const sinon = require('sinon')
var {app, connectToDB, orderPage} = require('../index.js')
var {getOrder} = require('../../KitchenView/KitchenView.js')
var {renderFood} = require('../../BurgerOrderer/public/burger.js')
const expect = chai.expect;
chai.use(chaiHttp)
chai.should()

describe('Testing the BurgerOrderer /order endpoint...', () =>{
    it('Trying correct input-format', done =>{
        chai
            .request(app)
            .post("/order")
            .send({foodItem: 'Original Kidney Killer.'})
            .end((error, response) => {
                if (error) return done(error)
                response.text.should.include('Original Kidney Killer');
                response.text.should.be.a('string')
            done(); 
        })
    })
    it('Trying incorrect input-format.', done => {
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

describe('Trying the orderPage() function...', () => {
    it ('Trying correct input.', done => {
        input = {foodItem: 'Classic Cheese Burger', ingredients: [ 'Mustard', 'Ketchup', 'Pickles' ]}
        expect(orderPage(input)).to.be.a('string')
        expect(orderPage(input)).to.eq('<h2>Order sent!</h2><a href = "/">Back</a><hr><p>One Classic Cheese Burger with Mustard,Ketchup,Pickles.</p>')
        done()
    })

    it('Trying incorrect input.', done => {
        input ="foodItem: 'Classic Cheese Burger', ingredients: [ 'Mustard', 'Ketchup', 'Pickles' "
        expect(orderPage(input)).to.not.be.a('object')
        expect(orderPage(input)).to.not.eq('<h2>Order sent!</h2><a href = "/">Back</a><hr><p>One Classic Cheese Burger with Mustard,Ketchup,Pickles.</p>')
        done()

    })
})

describe('Trying the getOrder() function', () => {
    it ('Trying correct input.', done => {
        input = {foodItem: 'Classic Cheese Burger',ingredients: [ 'Beef patty', 'Cheddar Cheese', 'Mustard' ]}
        expect(getOrder(input)).to.be.a('string')
        expect(getOrder(input)).to.eq('\n-------------------NEW ORDER-------------------\nA Classic Cheese Burger customized with Beef patty,Cheddar Cheese,Mustard.')
        done()
    })

    it('Trying incorrect input.', done => {
        input ="{foodItem: 'Classic Cheese Burger',ingredients: [ 'Beef patty', 'Cheddar Cheese', 'Mustard' ]}"
        expect(getOrder(input)).to.not.be.a('object')
        expect(getOrder(input)).to.not.eq('\n-------------------NEW ORDER-------------------\nA Classic Cheese Burger customized with Beef patty,Cheddar Cheese,Mustard.')
        done()

    })
})
// describe('Trying the renderfood() function', () => {
//     it("Seeing if it runs the expected amount of times", done => {
//     var spy = sinon.spy(renderFood('window', "renderFood"))
//     expect(spy.callCount).to.eq(1)
//     });
// });

// describe('Check database connection', () => {

//     it('Testing connection to Database', done => {
//         connectToDB()
//         done()
//         })
//     })