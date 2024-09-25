const mongoose = require('mongoose');
main().catch(err => console.log(err));
const express = require('express')

app = express();

express.json();

app.listen(3000, () => {
    console.log('Server running on port 3000')
});


// const Food = mongoose.model('Model', {}, 'FoodItems');
const foodSchema = new mongoose.Schema({
    id: String,
    type: String,
    name: String,
    ingredients: [{type: String}]
});


//console.log(food);



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/MenuStore');
    console.log('Connected to MenuStore')
    const FoodType = mongoose.model("Food", foodSchema, 'FoodItems');
    const allFood = await FoodType.find({});
    const burgers = await FoodType.find({type: "burger"});
    const sides = await FoodType.find({type: "sides"});
    // Loop through to post each element
    // food.forEach(element => {
    //     console.log(element['name'])
    // });

    app.get('/', (req, res) => {
        console.log("Getting all database data...")
        res.send(allFood);
    })

    app.get('/burgers', (req, res) => {
        console.log("Getting all database 'burger' data...")
        res.send(burgers);
    })
    app.get('/sides', (req, res) => {
        console.log("Getting all database 'sides' data...")
        res.send(sides);
    })
}
