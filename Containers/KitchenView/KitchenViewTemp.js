const express = require('express');
const cors = require('cors');

const app = express();

// Allow all CORS 
app.use(cors());

app.get(`/order/:burgerName`, (req, res) => {
    res.send(console.log(req.params.burgerName))
});

app.get(`/`, (req, res) => {
    res.send("Test")
});

app.listen(3001, () => {
    console.log('app listening on port 3001');
});
