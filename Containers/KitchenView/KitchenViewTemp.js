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
