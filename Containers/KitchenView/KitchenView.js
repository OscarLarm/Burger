const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded());


// Allow all CORS 
app.use(cors());

/**
 *  Creates a string of the order, based on the data argument.
 * @param {*} data Data being checked for the keys "burger" and "ingredients".
 * @returns String with order from burgerOrderer.
 */
function getOrder(data){
    message = `\n-------------------NEW ORDER-------------------\n`
    if (data["ingredients"]) {
        message += `A ${data["burger"]} customized with`
        let ingredients = []
        ingredients.push(data["ingredients"])

        ingredients = ingredients.join(', ')
        message += ` ${ingredients}.`
    }
    else{
        message += `A default ${data["burger"]}`
    }
    return message
}

app.post(`/order`, (req, res) => {
    data = req.body
    console.log(getOrder(data))
    res.send("recived")

});

app.listen(3001, () => {
    
});