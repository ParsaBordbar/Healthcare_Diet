const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    if (req.body.password === "admin" && req.body.userName == 'admin' ){
        res.status(200)
        res.send("It's OK!")
    }
})