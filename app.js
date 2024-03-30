// Necessary stuffs
const express = require('express');
const app = express();
const PORT = 3000;
require('./config/db') // database connection
app.set('view engine', 'ejs'); // View Engine | ejs

// Middlewares
app.use(express.static('public'));

// routes
const homeRoutes = require('./routes/homeRoutes');
const userRoutes = require('./routes/userRoutes');
const playerRoutes = require('./routes/playerRoutes');

app.use('/', homeRoutes);
app.use('/user', userRoutes);
app.use('/player', playerRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});