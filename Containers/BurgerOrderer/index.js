const express = require('express');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname,  '/public')));

app.use((req, res) => {
    res.status(404);
    res.send('asdf')
})

app.listen(3000, () => {
    console.log('app listening on port 3000');
});