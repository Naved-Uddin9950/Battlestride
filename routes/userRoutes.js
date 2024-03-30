const express = require('express');
const router = express.Router();
const user = require('../models/userModel');

router.use(express.static('public'));

router.get('/', (req, res) => {
    res.render('user/register');
});

// Register User
router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    let data = req.query;
    await user.create(data);
});

// Login User
router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    let query = req.query;
    let data = await user.findOne(query);
    
    res.send(data);
});

module.exports = router;
