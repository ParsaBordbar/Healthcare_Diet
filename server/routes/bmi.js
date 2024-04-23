const express = require('express');
const router = express.Router();
const {validateBmi, BmiForm } = require('../models/bmiForm')

router.get('/', async(req, res) => {
    if(BmiForm){
        const bmiForms = await BmiForm.find().sort()
        res.send(bmiForms)
    }
    else res.send({"DataBase": "Empty!!!"}); 
})

router.post('/' ,async(req, res) => {
    const {error} = validateBmi(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    let form = new BmiForm({
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        wight: req.body.wight,
    })
    form = await form.save();
    res.send(form);
})

module.exports = router;