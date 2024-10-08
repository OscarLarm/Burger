const express = require('express'); // show that we need express to run this 
const fs = require('fs'); // so i can read the file later on the the program
const app = express();
const port = 3000; // opens port 3000 so you can accses it from the http://localhost:${port}

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
    // puts the text in the console to tell the user were to go
    console.log(`Server is running on http://localhost:${port}`);
    
});
