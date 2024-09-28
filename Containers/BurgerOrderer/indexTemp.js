const express = require('express');
const { stat } = require('fs');
const path = require('path');

const app = express();

// app.use(express.static('./Containers/BurgerOrderer'));

staticBurgers= [
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
    pg += `<form>`
    getBurgers().forEach(burger => {
        pg += `<strong><input type="radio" name="burger" value="${burger["name"]}" onclick="addBurgerToCart('${burger["name"]}')">${burger["name"]}</input></strong>`
        pg += `<br></br>Customize the burger:`
        burger["ingredients"].forEach(ingredient => {
            pg += `<li><input type ="checkbox" onclick="addOptionToCart('${ingredient}')">${ingredient}</input></li>`
            
        })
        pg += "<hr></hr>";
        pg += "<br></br>";
    });
    pg += `<button type="submit">Add to cart</button>`
    pg += `</form>`
    pg += "</UL>";
    pg += "<br> </br>";

    pg += `<h2>Cart</h2>`;
    pg += `<button type = "button" onclick="location.reload()">Clear</button>`;
    pg += `<button type = "button" onclick="buy(order)">Buy</button>`;
    pg += "<hr></hr>";
    pg += `<ul id="cart">`;
    pg += `<div>` 
    pg += `<h2>Burger:</h2>`;
    pg += `<div id = cartBurger></div>`;
    pg += `</div>`
    pg += `<div>` 
    pg += `<h2>Customization:</h2>`;
    pg += `<div id = cartOptions></div>`;
    pg += `</div>`
    pg += `</ul>`;

    pg += `
    <script> 
    const baseURL = 'http://127.0.0.1:3001'
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

    function addBurgerToCart(burgerName){
        options = []
        order += burgerName
        cartBurger = document.getElementById("cartBurger");
        cartBurger.innerHTML = '<li>' + burgerName + '</li>'
        return console.log('Added ' + burgerName + ' to cart.');
    }

    function addOptionToCart(optionName){
        options += optionName
        cartOption = document.getElementById("cartOptions");
        cartOption.innerHTML += '<li>optionName</li>'
        return console.log('Added ' + optionName + ' to cart.');
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
