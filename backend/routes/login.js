const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
        console.log(body);
        res.send('we have clicked login button')
});

module.exports = router;