
const express = require("express")
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
const fullMenu = Foods.find()

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://mongodb/MenuStore');
        console.log('Connected to MenuStore');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
}

connectToDB()

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
}

app.post('/order', (req, res) => {
    async function sendToKitchen(data){
        const sendData = await fetch("http://kitchenview:3001/order", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    data = req.body
    sendToKitchen(data)
    res.send(orderPage(data))
});

app.get('/database', async (req, res) => {
    const db = await fullMenu
    res.json(db)
    console.log(JSON.stringify(db))
})

app.listen(3000, () => {
    console.log('app running on http://localhost:3000');
});