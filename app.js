// Necessary stuffs
const express = require('express');
const app = express();
const PORT = 3000;
require('./config/db')
// const db = require('./config/db');
// db(); // database connection

// Models
const race = require('./models/raceSchema');
const job = require('./models/jobSchema');


// Middlewares
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// routes
const homeRoutes = require('./routes/homeRoutes');
// const userRoutes = require('./routes/userRoutes');
const playerRoutes = require('./routes/playerRoutes');

app.use('/', homeRoutes);
// app.use('/', userRoutes);
app.use('/', playerRoutes);

app.get('/data', async (req, res) => {
    let obj = {
        class : "warrior",
        stats : {
            hp : 10,
            mp : 10,
            str : 10,
            def : 10,
            matk : 10,
            mdef : 10,
            agl : 10,
            pow : 0
        },
        image : {
            male : {
                teen : "teen image",
                young : "young image",
                adult : "adult image",
                middle : "middleage image",
                old : "old image"
            },
    
            female : {
                teen : "teen image",
                young : "young image",
                adult : "adult image",
                middle : "midlleage image",
                old : "old image"
            }
        }
    }

    let job2 = new job(obj);
    let data = await job2.save();
    // let data = await job.create(obj);

    res.send(`${data}`);
});

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});