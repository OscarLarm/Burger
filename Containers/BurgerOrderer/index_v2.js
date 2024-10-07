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
    
    arr.forEach(element => {
        orderUrl += element
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
        console.log(object)
}
function renderOptions(){
    newArray = getburger();
    pg = "<h2> Options </h2>";
    
    newArray.forEach(element => {
        pg += "<ul>";
            pg += "<li>" + "<input type=\"checkbox\" class='parent'" + "value=" + element["name"] + ">" + "<b>" + element["name"] + "</b>" 
            pg += "<h4>Ingredients </h4><ul>"
            element["ingredients"].forEach(ingredient => {
                pg += "<li>" + "<input type=\"checkbox\" class ='child'" + "value="+ ingredient + ">"+ ingredient + "</li>";
            });
        pg += "</ul> </li></ul>"
        
    });

    return pg;
}




// fetch(url)
//     .then(res => res.json);
