// const express = require('express');
// const { stat } = require('fs');
// const path = require('path');

// const { text } = require("express");

// const app = express();

// // app.use(express.static('./Containers/BurgerOrderer'));

// app.get('/', (req, res) => {
//     res.send(renderFrontpage());
// });

// app.listen(3000, () => {
//     console.log('app listening on port 3000');
// });

const express = require('express');

const app = express();

app.get(`/order/:burgerName`, (req, res) => {
    res.send(console.log(`One ${req.params.burgerName}`))
})

app.get(`/`, (req, res) => {
    res.send("Test")
})

app.listen(3001, () => {
    console.log('app listening on port 3000');
});
