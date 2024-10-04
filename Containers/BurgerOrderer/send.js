const express = require('express');
const { send } = require('express/lib/response');

const app = express();
const path = require('path');
const baseurl = "http://burgerorder:8080/burger";
let orderUrl = "";
let orderArray = {};

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

    app.get("/order", (req, res) => {
        var data = orderArray
        res.json(data)
    });
   });

const menu = ["burger", "heartstopper", "Kidneykiller"];

function getburger(){
    return menu;
}


// function createURL(arr){
//     orderUrl = baseurl + "order/";
//     arr.forEach(item =>{
//         orderUrl += "?" + String(item);
//     });
//     console.log(orderUrl);
//     return orderUrl;
// }
function renderOptions(){
    newArray = getburger();
    pg = "<h2> Options </h2>";
    pg += "<ul>";
    newArray.forEach(element => {
        pg += "<li>" + "<input type=\"checkbox\" value=" + element + ">" + element + "<br />" + "</li>";
    });
    pg += "</ul>";
    return pg;
}




// fetch(url)
//     .then(res => res.json);
