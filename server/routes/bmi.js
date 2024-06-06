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
router.get('/phone:phoneNumber', async (req, res) => {
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


router.get('/search', async (req, res) => {
    const { query } = req.query;

    if (!query) {
        return res.status(400).send('Query parameter is required');
    }
    //regex for case-insensitive 
    const searchRegex = new RegExp(query, 'i');
    try {
        const results = await BmiForm.find({
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

router.get('/sort', async(req, res)=>{
    try {
        const sort =  req.query.sort == 'male' ? { gender: "مرد" } : { gender: "زن" };
        const response = await BmiForm.find(sort)
        res.send(response)
    } catch (error) {
        console.error('Error during Filtering:', error);
        return res.status(500).send('Server-Side Error.');
    }
})

router.post('/', async (req, res) => {
    try {
      const { error } = validateBmi(req.body);
      if (error) {
        return res.status(400).send(error.details[0].message);
      }
  
      // Check if the phone number is already in the database
      let phoneNumberCheck = await BmiForm.findOne({ phoneNumber: req.body.phoneNumber });
      if (phoneNumberCheck) {
        return res.status(400).send("Such phone number is already registered.");
      }
  
      // Create a new BmiForm 
      let form = new BmiForm({
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        bmi: (req.body.weight / (req.body.height * req.body.height)).toFixed(4), // Calculate BMI
      });
      form = await form.save();
      return res.send(form);
  
    } catch (err) {
      console.error("An error occurred:", err);
      return res.status(500).send("Internal Server Error");
    }
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