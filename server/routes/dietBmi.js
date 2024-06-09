const express = require('express');
const router = express.Router();
const {DietBmiForm, validateDietBmi } = require('../models/dietBmiform')

router.get('/', async(req, res) => {
    const response = await DietBmiForm.find().sort(req.params.id);
    if(response > 0){
        return res.send(response);
    }else {
        return res.send({ "DataBase": "Empty!!!" })
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

module.exports = router;