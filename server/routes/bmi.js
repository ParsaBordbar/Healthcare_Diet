const express = require('express');
const router = express.Router();
const { validateBmi, BmiForm } = require('../models/bmiForm');

router.get('/', async (req, res) => {
    if (BmiForm) {
        const bmiForms = await BmiForm.find().sort(req.params.id);
        return res.send(bmiForms);
    } else {
        return res.send({ "DataBase": "Empty!!!" });
    }
});

// This will check for the User's phoneNumber from the frontEnd, and Gives back a Response
router.get('/:phoneNumber', async (req, res) => {
    try {
        const result = await BmiForm.findOne({ phoneNumber: req.params.phoneNumber });
        if (result) {
            console.log(result);
            return res.status(200).send(result);
        } else {
            return res.status(404).send('Not Found');
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    const { error } = validateBmi(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // This Checks if the number is already in db or not
    let phoneNumberCheck = await BmiForm.findOne({ phoneNumber: req.body.phoneNumber });
    if (phoneNumberCheck) {
        return res.status(400).send("Such phone number is already registered.");
    }

    let form = new BmiForm({
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        wight: req.body.wight,
        bmi: (req.body.wight / (req.body.height * req.body.height)).toFixed(4), // bmi = wight/(height * height)
    });
    form = await form.save();
    return res.send(form);
});

router.put('/:phoneNumber', async (req, res) => {
    const bmiForm = await BmiForm.findByIdAndUpdate(req.params.phoneNumber, {
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        wight: req.body.wight,
        bmi: (req.body.wight / (req.body.height * req.body.height)).toFixed(4),
    }, { new: true });

    if (!bmiForm) {
        return res.status(404).send("Such BMI form was not found.");
    }
    return res.send(bmiForm);
});

router.delete('/:phoneNumber', async (req, res) => {
    const bmiForm = await BmiForm.findByIdAndDelete(req.params.phoneNumber);
    return res.send(bmiForm);
});

module.exports = router;
