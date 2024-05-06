const express = require('express');
const router = express.Router()

router.get('/', async (req, res) => {
    const mediterraneanForms = await mediterraneanForm.find().sort(req.params.id);
    res.send(mediterraneanForms)
})