const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded());


// Allow all CORS 
app.use(cors());

/**
 * Creates a string of the order, based on the data argument.
 * @param {*} data - Data being checked for the keys "burger" and "ingredients".
 * @returns {string} String with order from burgerOrderer.
 */
function getOrder(data){
    message = `\n-------------------NEW ORDER-------------------\n`
    message += `A ${data["foodItem"]}`
    if (data["ingredients"]) {
        message += ` customized with`
        let ingredients = []
        ingredients.push(data["ingredients"])

        ingredients = ingredients.join(', ')
        message += ` ${ingredients}.`
    }
    return message
}

// Route posted to from the BurgerOrderer index.js
app.post(`/order`, (req, res) => {
    var data = req.body
    console.log(getOrder(data))
    res.send("recived")

});

app.listen(3001, () => {
    
});

module.exports = {getOrder}
