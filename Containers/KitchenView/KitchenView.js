const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded());


// Allow all CORS 
app.use(cors());

function getOrder(data){
    message = `\n-------------------NEW ORDER-------------------\n`
    if (data["ingredients"]) {
        message += `A ${data["burger"]} customized with`
        let ingredients = []
        ingredients.push(data["ingredients"])

        ingredients = ingredients.join(', ')
        message += ` ${ingredients}.`
    }
    else{
        message += `A default ${data["burger"]}`
    }
    return message
}

app.post(`/order`, (req, res) => {
    data = req.body
    console.log(getOrder(data))
});

app.listen(3001, () => {
    console.log('app listening on port 3001');
});