const express = require('express');
const router = express.Router();
require('dotenv').config();
const morgan = require("morgan")

router.use(morgan('combined'));
const Kavenegar = require('kavenegar');

const api = Kavenegar.KavenegarApi({
    apikey: process.env.API_KEY
});


router.post(('/send'),async(req, res) => {
    try{
        api.VerifyLookup({
            receptor: req.body.receptor,
            token: req.body.token,
            "template": "verify"
        }, function(response, status) {
            console.log(response);
            console.log(status);
        });
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
})

router.get(('/send'), async(req, res) => {
    res.send("Test");
})

module.exports = router;