const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Endpoint to serve data from JSON file
app.get('/api/data', (req, res) => {
    fs.readFile('package-lock.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading data');
        }
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

// Serve static HTML files
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
