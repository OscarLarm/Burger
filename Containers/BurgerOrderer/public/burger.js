const mongoose = require('mongoose');


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

function getBurgers(){
    return staticBurgers;
};

function renderBurgers(){
    var container = document.getElementById("container")
    container.innerHTML += "<ul id=burgerList>"
    var burgerList = document.getElementById("burgerList")
    getBurgers().forEach(burger => {
        burgerList.innerHTML += "<hr></hr>";
        burgerList.innerHTML += `<form action="/order" method="post" id=${burger["name"]}>`
        burgerContainer = document.getElementById(`${burger["name"]}`)
        burgerContainer.innerHTML += `<h2>${burger["name"]}</h2>`
        burgerContainer.innerHTML += `<input type="hidden" name="burger" value="${burger["name"]}"</input>`
        burgerContainer.innerHTML += `<h4>Ingredients:</h4>`;
        burger["ingredients"].forEach(ingredient => {
            burgerContainer.innerHTML += `<input type="checkbox" name ="ingredients" value = "${ingredient}">${ingredient}</input>`;
        });
        burgerContainer.innerHTML += `<input type="submit" value= "Add to Cart">`
        burgerContainer.innerHTML += `</form>`
    });
    container.innerHTML += "</ul>";
}

renderBurgers()
