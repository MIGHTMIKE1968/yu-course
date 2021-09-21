const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome!</h2>');
});

app.get('/about', (req, res) => {
    res.send('<h1>The About Page</h2>');
});

app.listen(3000, () => {
    console.log('Now listening on port 3000!')
});