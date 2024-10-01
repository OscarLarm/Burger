const { json } = require('body-parser');
const express = require('express');
const { send } = require('express/lib/response');

const app = express();
const path = require('path');
const baseurl = "http://kitchenview:8081/";
let orderUrl = "";
let orderArray = [];

app.use(express.static(path.join(__dirname,  '/public')));
app.use(express.json());



app.listen(8080, () => {
    console.log('app listening on port 8080');
});
app.get("/", (req, res) => {
    res.send();
})

 app.get("/api", (req, res) =>{
    let stuff = renderOptions();
    res.send(stuff);
});



app.post("/send", (req, res) =>{
    let {parcel} = req.body;
    console.log(parcel);
    orderArray = parcel;
    res.status(200).send({status: "recived"});

    newUrl = createURL(orderArray)
    sendToKitchen(newUrl, orderArray)
   });

const menu = [ {
    "name":"fettburgare",
    "ingredients": [
        "Beef Patty",
        "Cheddar Cheese",
        "Letuce",
        "Fried Onion",
        "Dressing",
        "Bacon",
        "Sesame Bread"
    ]
},
{
    "name":"gnuttburgare",
    "ingredients": [
        "Beef patty",
        "Cheddar Cheese",
        "Mustard",
        "Ketchup",
        "Pickles",
        "Sesame Bread"
    ]
},
{
    "name":"isterburgare",
    "ingredients": [
        "Fried Chicken Patty",
        "Bread",
        "Dressing",
        "Brioche bread"
    ]
}];

function getburger(){
    return menu;
}


function createURL(arr){
    orderUrl = baseurl + "order/";

  
    arr.forEach(item =>{
        orderUrl += String(item);
    });
    console.log(orderUrl);
    return orderUrl;
}

function sendToKitchen(url, object){
    console.log('Sending KitchenView URL: ' + url);
        fetch(url,{
            method: "POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(object),
            
        });
        console.log(object)
}
function renderOptions(){
    newArray = getburger();
    pg = "<h2> Options </h2>";
    pg += "<ul>";
    newArray.forEach(element => {
        pg += "<li>" + "<input type=\"checkbox\" value=" + element["name"] + ">" + element["name"] + "<br />" + "</li>";
        element["ingredients"].forEach(ingredient => {
            pg += "<li>" + ingredient + "</li>";
        });
    });
    pg += "</ul>";
    return pg;
}




// fetch(url)
//     .then(res => res.json);
