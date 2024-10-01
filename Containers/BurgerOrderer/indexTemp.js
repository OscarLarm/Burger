
const express = require("express")
const { stat } = require('fs');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,  '/public')));

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
};


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