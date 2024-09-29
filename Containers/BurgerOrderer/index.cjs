const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

// Statiska burgare
const staticBurgers = [
    { name: 'fettburgare' },
    { name: 'gnuttburgare' },
    { name: 'isterburgare' }
];

// Hämta burgare
function getBurgers() {
    return staticBurgers;
}

// Rendera startsida
function renderFrontpage() {
    let pg = "<h1>Welcome to BurgerOrderer</h1>";
    pg += "<p><ul>";

    getBurgers().forEach(b => {
        pg += "<li>" + b.name + "</li>";
    });

    pg += "</ul></p>";
    return pg;
}

// Rendera beställningssida
function renderOrderingPage(burgerName, args) {
    return `ordered ${burgerName}`;
}

// Bas-URL för KitchenView
const baseURL = `http://${process.env.KITCHENVIEW_HOST || 'localhost:5000'}`;

// Skapa URL för beställning
function makeURL(burgerName) {
    return `${baseURL}/buy/${burgerName}`;
}

// Lägg till alternativ i URL
function addOptions(url, args) {
    const query = Object.keys(args).map(arg => `${arg}=${args[arg]}`).join('&');
    return query.length > 0 ? `${url}?${query}` : url;
}

// Skicka beställning till KitchenView och skicka tillbaka resultatet
function sendToKitchen(burgerName, args) {
    let requrl = makeURL(burgerName);
    requrl = addOptions(requrl, args);

    console.log('Using KitchenView URL: ' + requrl);
    axios.get(requrl)
        .then(response => {
            console.log('Order sent successfully');
            res.send(renderOrderingPage(burgerName, args));
        })
        .catch(error => {
            console.error('Error sending order:', error);
            res.status(500).send('Failed to send order to the kitchen.');
        });
}

// Hantera startsida
app.get('/', (req, res) => {
    res.send(renderFrontpage());
});

// Hantera burgarbeställning
app.get('/buy/:burgerName', (req, res) => {
    const burgerName = req.params.burgerName;
    console.log('Placing an order on ' + burgerName);
    sendToKitchen(burgerName, req.query);
    res.send(renderOrderingPage(burgerName, req.query, res));
});

// Starta servern
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
