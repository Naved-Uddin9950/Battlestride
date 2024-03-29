const express = require('express');
const app = express();
const PORT = 3000;

// Middlewares
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create-character', (req, res) => {
    res.render('player');
});

app.get('/town', (req, res) => {
    res.render('town');
});

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});