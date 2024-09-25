const mongoose = require('mongoose');
const express = require('express')

app = express();

app.use(express.json());

const foodSchema = new mongoose.Schema({
    id: String,
    type: String,
    name: String,
    ingredients: [{type: String}]
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/MenuStore');
    console.log('Connected to MenuStore')

    const FoodType = mongoose.model("Food", foodSchema, 'FoodItems');
    const allFood = await FoodType.find({});
    const burgers = await FoodType.find({type: "burger"});
    const sides = await FoodType.find({type: "sides"});
    const drinks = await FoodType.find({type: "drink"});
    const salads = await FoodType.find({type: "salad"});

    app.get('/', (req, res) => {
        console.log("Getting all database data")
        res.send(allFood);
    })

    app.get('/burgers', (req, res) => {
        console.log("Getting all database 'burger' data")
        res.send(burgers);
    })
    app.get('/sides', (req, res) => {
        console.log("Getting all database 'sides' data")
        res.send(sides);
    })
    app.get('/drinks', (req, res) => {
        console.log("Getting all database 'drinks' data")
        res.send(drinks);
    })
    app.get('/salads', (req, res) => {
        console.log("Getting all database 'salads' data")
        res.send(salads);
    })
};

main().catch(err => console.log(err));

app.listen(3000, () => {
    console.log('Server running on port 3000')
});