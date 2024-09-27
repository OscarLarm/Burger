const express = require('express');
const { stat } = require('fs');
const path = require('path');

const app = express();

// app.use(express.static('./Containers/BurgerOrderer'));

staticBurgers= [{"name":"fettburgare"},
    {"name":"gnuttburgare"},
    {"name":"isterburgare"}];

const baseURL = 'http://127.0.0.1:3000'

function makeURL(burgerName){
    return baseURL + '/order/' + burgerName
}

function getBurgers(){
    return staticBurgers;
};

function renderFrontpage(){
    pg = "<h1>Order:</h1>"
    pg += "<P><UL>"
    getBurgers().forEach(burger => {
        pg += `<li><a href="/${burger["name"]}">${burger["name"]}</a></li>`
        pg += "<br>"
    });
    pg += "</UL>";

    return pg;
};

function renderOrderingPage(burgerName) {
    return 'Ordered ' + burgerName + `<br> <br> <a href ="/"> Back </>`
}

function sendToKitchen(burgerName, /*args */){
    requrl = makeURL(burgerName)
    // requrl = addOptions(requrl, args)

    // console.log('Sending KitchenView URL: ' + requrl)
    fetch(`http://127.0.0.1:3001/order/${burgerName}`)
    return
}

app.get('/', (req, res) => {
    res.send(renderFrontpage());
});

app.get('/:burgerName', (req, res) => {
    function buy(burgerName) {
        console.log('bought ' + burgerName);
        sendToKitchen(burgerName);
        return renderOrderingPage(burgerName);
    };
    res.send(buy(req.params.burgerName))
});


app.listen(3000, () => {
    console.log('app listening on port 3000');
});
