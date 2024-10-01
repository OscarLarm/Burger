const mongoose = require('mongoose');
const express = require('express');
const ejs = require('ejs') 

app = express();
app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/BurgerOrderer')

const burgerSchema = {
    id: String,
    type: String,
    name: String,
}

const Burger = mongoose.model('Burger', burgerSchema);

app.get ('/', (req, res) => {
    Burgers.find().then((Burgers)  => { 

        res.render("index", { 
        
        Foodlist: Burgers 
        
    }); 
    
})

app.listen(4000,function(){
    console.log('server is running');

    });

});