const express = require('express');
const cors = require('cors'); // cors
const app = express();
app.use(cors()); // cors
const port = 3000;

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!')
    // res.sendFile(__dirname + '/index.html'); // without cors
});

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});


app.listen(port);
