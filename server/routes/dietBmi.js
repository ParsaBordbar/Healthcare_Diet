const express = require('express');
const router = express.Router();
const {DietBmiForm, validateDietBmi } = require('../models/dietBmiform')
const moment = require('moment');
const momentJalaali = require('moment-jalaali');

router.get('/', async(req, res) => {
    const response = await DietBmiForm.find().sort(req.params.id);
        return res.send(response);
    });

router.get('/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).send('Query parameter is required');
    }
    const searchRegex = new RegExp(query, 'i');
    try {
        const results = await DietBmiForm.find({
            $or: [
                { phoneNumber: searchRegex },
                { name: searchRegex },
                { lastName: searchRegex }
            ]
        });

        if (results.length > 0) {
            return res.status(200).send(results);
        } else {
            return res.status(404).send('No matching records found');
        }
    } catch (error) {
        console.error('Error during search:', error);
        return res.status(500).send('Server Error');
    }
});


router.post('/', async (req, res) => {
    try {
      const { error } = validateDietBmi(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }  
      let form = new DietBmiForm({
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        abdominalCircumference: req.body.abdominalCircumference,
        dietName: req.body.dietName,
        bmi: (req.body.weight / ((req.body.height / 100) ** 2)).toFixed(4),
        joinedAtJalali: new Date(),
        joinedAtJalali: momentJalaali().format('jYYYY/jM/jD HH:mm:ss')
      });
      form = await form.save();
      return res.send(form);
  
    } catch (err) {
      console.error("An error occurred:", err);
      return res.status(500).send("Internal Server Error");
    }
  });

module.exports = router;