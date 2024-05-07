const express = require('express');
const router = express.Router()
const { MediterraneanForm } = require('../models/mediterraneanForm');

router.get('/', async (req, res) => {
    if(MediterraneanForm) {
        const mediterraneanForms = await MediterraneanForm.find().sort(req.params.id);
        res.send(mediterraneanForms)
    }
    else res.send({"DataBase": "NO mediterraneanForms yet!"});
});

router.get('/:id', async(req, res) => {
    const mediterraneanForm = await MediterraneanForm.findById(req.params.id);
    if(!mediterraneanForm) res.status(404).send("Mediterranean with this ID was not found.")
    res.send(mediterraneanForm)
})

module.exports = router;