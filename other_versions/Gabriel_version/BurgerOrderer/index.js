const { json } = require('body-parser');
const express = require('express');
const { send } = require('express/lib/response');
const app = express();
const path = require('path');
const kitchenUrl = "http://kitchenview2:8081/order";
let orderUrl = "";
let orderArray = [];

app.use(express.static(path.join(__dirname,  '/public')));
app.use(express.json());



app.listen(8080, () => {
    console.log('app listening on port 8080');
});

app.get("/", (req, res) => {
    res.send();
});

//Endpoint for getting order in html.
 app.get("/api", (req, res) =>{
    let stuff = renderOptions();
    res.send(stuff);
});


//Endpoint for reciving order from frontend as post request.
app.post("/send", (req, res) =>{
    let {parcel} = req.body;
    console.log(parcel);
    orderArray = parcel;
    res.status(200).send({status: "recived"});


    sendToKitchen(orderArray)
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
/**
 * Function is used to get the burger menu.
 * @returns Returns the burger menu
 */
function getburger(){
    return menu;
}


// function createURL(arr){
//     orderUrl = baseurl + "order/";
    
//     arr.forEach(element => {
//         orderUrl += element
//     });
    
    

    
//     console.log(orderUrl);
//     return orderUrl;
// }

/**
 * Function sends a fetch Post request and sends the order to the kitchen.
 * Throws error if fetch failed.
 * @param {*} object Array containing the current order from frontend.
 */
function sendToKitchen(object){
    console.log('Sending KitchenView URL: ' + kitchenUrl);
        fetch(kitchenUrl,{
            method: "POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify(object),
            
        })
        .then((response) => {

            if(response.ok) {
                response.json()
                .then(function(response) {
                    console.log(response);
                });
            }
            else {
                throw Error('Something went wrong');
            }
        })
        .catch(function(error) {
            console.log(error);
        });
   
}

/**
 * Formats a string of html elements with the menu options and its ingredients.
 * @returns Formated string.
 */
function renderOptions(){
    newArray = getburger();

    pg = "<h2> Options </h2>";
    
    newArray.forEach(element => {
        pg += "<ul>";
            pg += "<li>" + "<input type=\"checkbox\" class='parent'" + "value=" + element["name"] + ">" + "<b>" + element["name"] + "</b>" 
            pg += "<h4>Ingredients </h4><ul>"
            element["ingredients"].forEach(ingredient => {
                pg += `<li> <input type=\"checkbox\" class="child"              value="${ingredient}">  ${ingredient}  </li>`;
            });
        pg += "</ul> </li></ul>"
        
    });

    return pg;
}




