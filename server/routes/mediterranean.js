const express = require('express');
const router = express.Router();
const { MediterraneanForm, validateMediterranean } = require('../models/mediterraneanForm');
const uploader = require('../middlewares/multer');

router.get('/', async (req, res) => {
    if (MediterraneanForm) {
        const mediterraneanForms = await MediterraneanForm.find().sort(req.params.id);
        return res.send(mediterraneanForms); 
    } else {
        return res.send({ "DataBase": "NO mediterraneanForms yet!" }); 
    }
});

router.get('/certain/:phoneNumber', async (req, res) => {
    const mediterraneanForm = await MediterraneanForm.find({ phoneNumber: req.params.phoneNumber });
    if (!mediterraneanForm) {
        return res.status(404).send("Mediterranean with this phoneNumber was not found."); 
    }
    return res.send(mediterraneanForm); 
});


router.get('/checking/isChecked', async (req, res) => {
    try {
        const mediterraneanForms = await MediterraneanForm.find({ isChecked: false });
        if (mediterraneanForms.length === 0) {
            return res.status(404).send("No Diets found with isChecked set to false.");
        }
        return res.send(mediterraneanForms);
    } catch (error) {
        return res.status(500).send("An error occurred while retrieving the data.");
    }
});


router.get('/sort', async(req, res)=>{
    if(req.query.sort == 'special'){
        const response = await MediterraneanForm.find({
            $or:[
                {cancer: true},
                {Migraine: true},
                {otherSickness: !null}
            ]
        }
         )
        return res.send(response)        
    }
    if(req.query.sort == 'newest'){
        const response = await MediterraneanForm.find().sort({ createdAtJalali: -1 });
        if (response.length > 0) {
            return res.status(200).send(response);
            } else {
            return res.status(404).send({ "message": "No comments found." });
        }
    }
    if(req.query.sort == 'oldest'){
        const response = await MediterraneanForm.find().sort({ createdAtJalali: 1 });
        if (response.length > 0) {
            return res.status(200).send(response);
            } else {
            return res.status(404).send({ "message": "No comments found." });
        }
    }
})


router.put('/edit/:id', uploader.fields([{ name: 'document', maxCount: 5 }, { name: 'payment', maxCount: 1 }]), async (req, res) => {
    try {
        const { id } = req.params;
        const existingForm = await MediterraneanForm.findById(id);
        
        if (!existingForm) {
            return res.status(404).send("Such form with this ID does not exist.");
        }

        Object.keys(req.body).forEach(key => {
            if (key in existingForm) {
                existingForm[key] = req.body[key];
            }
        });

        if (req.files) {
            if (req.files.document) {
                const documentFiles = req.files.document.map(file => ({
                    originalName: file.originalname,
                    filename: file.filename,
                    path: file.path,
                    size: file.size,
                    mimetype: file.mimetype,
                }));
                existingForm.files = documentFiles;
            }

            if (req.files.payment && req.files.payment.length > 0) {
                const payment = req.files.payment[0];
                existingForm.payment = {
                    originalName: payment.originalname,
                    filename: payment.filename,
                    path: payment.path,
                    size: payment.size,
                    mimetype: payment.mimetype,
                };
            }
        }

        const updatedForm = await existingForm.save();
        return res.send(updatedForm);

    } catch (err) {
        return res.status(400).send(err.message);
    }
});



router.delete('/:phoneNumber', async (req, res) => {
    const mediterraneanForm = await MediterraneanForm.findByIdAndDelete(req.params.phoneNumber);
    if (!mediterraneanForm) {
        return res.status(404).send("Mediterranean form with this phoneNumber does not exist."); 
    }
    return res.send(mediterraneanForm); 
});

module.exports = router;
