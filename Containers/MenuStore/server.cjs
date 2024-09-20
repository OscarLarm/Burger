const mongoose = require('mongoose');
main().catch(err => console.log(err));
const express = require('express')

app = express();

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/MenuStore');
    // const Food = mongoose.model('Model', {}, 'FoodItems');
    const foodSchema = new mongoose.Schema({
        type: String,
        name: String
    });
    const FoodType = mongoose.model("Food", foodSchema, 'FoodItems');
    const food = await FoodType.find({type:'burger'});
    console.log();

    food.forEach(element => {
        console.log(element['name'])
    });
}

app.get('/test', (req, res) => {
    console.log('test success')
    res.send('testest')
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
});

app.get('/', (req, res) => {
    console.log('test')
    res.send('hey');
});