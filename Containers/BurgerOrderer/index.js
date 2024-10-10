
const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,  '/public')));
app.use(express.json());
app.use(express.urlencoded());


const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
    id: String,
    type: String,
    name: String,
    ingredients: [{ type: String }]
});

const Foods = mongoose.model("Food", foodSchema, 'FoodItems');

function connectToDB() {
    try {
        mongoose.connect('mongodb://mongodb/MenuStore');
        console.log('Connected to MenuStore');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
}

connectToDB()

/**
 * Returns a html-formatted string stating that an order has been placed for the values from 
 * the keys "burger" and "ingredients" in argument data.
 * @param {*} data The data being read.
 * @returns {string} String formatted as html, stating the orders placed from data.
 */
function orderPage(data){
    JSON.stringify(data)
    page = '<h2>Order sent!</h2>'
    page += `<a href = "/">Back</a>`
    page += `<hr>`
    page += `<p>One ${data["burger"]}`
    if (data["ingredients"]) {
        page += ` with `
        let ingredients = [data["ingredients"]]
        ingredients.join(", ")
        page += `${ingredients}.`
    }
    page += `</p>`
    return page
};

// Route being called from the forms on the burgerOrderer site.
app.post('/order', (req, res) => {
    /**
     * Fetch post the data to the kitchenview /order endpoint.
     * @param {*} data The data to send.
     */
    
    async function sendToKitchen(data){
        const sendData = await fetch("http://kitchenview:3001/order", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
    };
    data = req.body
    sendToKitchen(data)
    sentOrder = orderPage(data)
    res.send(sentOrder)
});

app.get('/database', (req, res) => {
    const db = Foods.find()
    
    res.json(db)
})

app.listen(3000, () => {
    console.log('app running on http://localhost:3000');
});

module.exports = {app, connectToDB}
