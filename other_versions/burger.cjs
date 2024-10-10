const mongoose = require('mongoose');
const express = require('express');

app = express();
app.use(express.json());

const foodSchema = new mongoose.Schema({
    id: String,
    type: String,
    name: String,
    ingredients: [{ type: String }]
});

const Foods = mongoose.model("Food", foodSchema, 'FoodItems');

async function connectToDB() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/MenuStore');
        console.log('Connected to MenuStore');
    } catch (err) {
        console.error('Error connecting to the database', err);
    }
}

app.get('/api/foods', async (req, res) => {
    try {
        const type = req.query.type;
        let foodItems;

        if (type) {
            foodItems = await Foods.find({ type });
            console.log(`Getting all database '${type}' data`);
        } else {
            foodItems = await Foods.find({});
            console.log("Getting all database data");
        }

        res.json(foodItems);
    } catch (err) {
        console.error('Error getting food data:', err);
        res.status(500).send('Error getting food data');
    }
});

app.get('/foods/burgers', async (req, res) => {
    try {
        const burgers = await Foods.find({ type: "burger" });
        console.log("Getting all database 'burger' data");
        res.json(burgers);
    } catch (err) {
        console.error('Error getting burgers:', err);
        res.status(500).send('Error getting burgers');
    }
});

app.get('/foods/sides', async (req, res) => {
    try {
        const sides = await Foods.find({ type: "sides" });
        console.log("Getting all database 'sides' data");
        res.json(sides);
    } catch (err) {
        console.error('Error getting sides:', err);
        res.status(500).send('Error getting sides');
    }
});

app.get('/api/drinks', async (req, res) => {
    try {
        const drinks = await Foods.find({ type: "drink" });
        console.log("Getting all database 'drinks' data");
        res.json(drinks);
    } catch (err) {
        console.error('Error getting drinks:', err);
        res.status(500).send('Error getting drinks');
    }
});

app.get('/foods/salads', async (req, res) => {
    try {
        const salads = await Foods.find({ type: "salad" });
        console.log("Getting all database 'salads' data");
        res.json(salads);
    } catch (err) {
        console.error('Error getting salads:', err);
        res.status(500).send('Error getting salads');
    }
});

connectToDB().then(() => {
    app.listen(3000, () => {
        console.log('Server running on port 3000');
    });
});

