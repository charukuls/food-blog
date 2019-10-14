const path = require('path');

const express = require('express');

const app = new express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
});


//route to serve requests to /about
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.listen(4000, () => {
    console.log('App listening on port 4000')
});