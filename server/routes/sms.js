const express = require('express');
const router = express.Router();
require('dotenv').config();
var Kavenegar = require('kavenegar');

var api = Kavenegar.KavenegarApi({
    apikey: process.env.API_KEY
});


router.post(('/send'),async(req, res) => {
    try{
        api.VerifyLookup({
            receptor: req.body.receptor,
            token: req.body.token,
            template: "verify"
        }, function(response, status) {
            console.log(response);
            console.log(status);
        });
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;