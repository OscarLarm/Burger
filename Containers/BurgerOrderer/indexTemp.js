
const express = require("express")
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,  '/public')));

app.use(express.json());
app.use(express.urlencoded());

function orderPage(data){
    JSON.stringify(data)
    page = '<h2>Order sent!</h2>'
    page += `<a href = "/">Back</a>`
    page += `<hr>`
    page += `<p>One ${data["burger"]}`
    if (data["ingredients"]) {
        page += ` with `
        let ingredients = [data["ingredients"]]
        ingredients.join(", ")
        page += `${ingredients}.`
    }
    page += `</p>`
    return page
}

app.post('/order', (req, res) => {
    async function sendToKitchen(data){
        const sendData = await fetch("http://localhost:3001/order", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
    data = req.body
    sendToKitchen(data)
    res.send(orderPage(data))
});

app.listen(3000, () => {
    console.log('app listening on port 3000');
});