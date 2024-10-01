const express = require('express');
const { stat } = require('fs');
const path = require('path');

const app = express();

// app.use(express.static('./Containers/BurgerOrderer'));

const userOrder = {
    burger: null,
    customization: [],
    sides: null,
    drinks: null

};

function clearCart(){
    burger = null
    customization = []
    sides = null
    drinks = null
    cart = document.getElementById('cart')
    cart.innerHTML = ""
}


staticBurgers = [
    {
        "name":"fettburgare",
        "ingredients": [
            "Beef Patty",
            "Cheddar Cheese",
            "Letuce",
            "Fried Onion",
            "Dressing",
            "Bacon",
            "Sesame Bread"
        ]
    },
    {
        "name":"gnuttburgare",
        "ingredients": [
            "Beef patty",
            "Cheddar Cheese",
            "Mustard",
            "Ketchup",
            "Pickles",
            "Sesame Bread"
        ]
    },
    {
        "name":"isterburgare",
        "ingredients": [
            "Fried Chicken Patty",
            "Bread",
            "Dressing",
            "Brioche bread"
        ]
    }
];

    function getBurgers(){
        return staticBurgers;
    };

function renderFrontpage(){
    pg = "<h1>Order:</h1>"
    pg += "<P><UL>"
    getBurgers().forEach(burger => {
        pg += `<h2>${burger["name"]}: <button type="button" onclick="buy('${burger["name"]}')">Add to Cart</button></h2>`
        pg += `<h4>Ingredients:</h4>`;
        burger["ingredients"].forEach(ingredient => {
            pg += `<li>${ingredient}</li>`;
        })
        pg += "<hr></hr>";
    });
    pg += "</UL>";
    pg += "<hr></hr>"
    pg += '<div id="cart"'
    
    pg += '</div>'

    pg += `
    <script> 
    const baseURL = 'http://localhost:3001'
    var options = []
    var order = ''

    function makeURL(burgerName){
        return baseURL + '/order/' + burgerName
    }

    function sendToKitchen(burgerName){
        requrl = makeURL(burgerName);
        
        console.log('Sending KitchenView URL: ' + requrl);
        fetch(requrl);
        return
    }

    function buy(burgerName){
        console.log('Sending' + burgerName);
        sendToKitchen(burgerName);
        window.location = '/bought/' + burgerName
    }
    </script>`
    return pg;
};

app.get('/', (req, res) => {
    res.send(renderFrontpage());
});

app.get('/bought/:items', (req, res) => {
    res.send(renderOrderingPage(req.params.items));
});

function renderOrderingPage(order) {
    return 'Ordered ' + order + '<br> <br> <a href ="/"> Back </>'
};

app.listen(3000, () => {
    console.log('app listening on port 3000');
});

function addToCart(item, type){
    userOrder.type = item
}

function sendCartToKitchen(){

}