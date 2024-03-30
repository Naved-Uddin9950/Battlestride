const express = require('express');
const router = express.Router();

router.get('/create-character', (req, res) => {
    res.render('player');
});

module.exports = router;