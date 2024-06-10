const express = require('express');
const router = express.Router();
const { MediterraneanForm, validateMediterranean } = require('../models/mediterraneanForm');

router.get('/', async (req, res) => {
    if (MediterraneanForm) {
        const mediterraneanForms = await MediterraneanForm.find().sort(req.params.id);
        return res.send(mediterraneanForms); 
    } else {
        return res.send({ "DataBase": "NO mediterraneanForms yet!" }); 
    }
});

router.get('/:phoneNumber', async (req, res) => {
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

router.post('/', async (req, res) => {
    const { error } = validateMediterranean(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message); 
    }
    let phoneNumberCheck = await MediterraneanForm.findOne({ phoneNumber: req.body.phoneNumber });
    if (phoneNumberCheck) {
        return res.status(400).send("Such phone number is already registered."); 
    }
    
    let mediterraneanForm = new MediterraneanForm({
        dailyFruit: req.body.dailyFruit,
        dailyVegetable: req.body.dailyVegetable,
        vegetables: req.body.vegetables,
        Cereals: req.body.Cereals,
        dailyCereals: req.body.dailyCereals,
        potatoAndStarchWeekly: req.body.potatoAndStarchWeekly,
        oliveAndOliveOilDaily: req.body.oliveAndOliveOilDaily,
        nutsDaily: req.body.nutsDaily,
        dairyDaily: req.body.dairyDaily,
        beans: req.body.beans,
        eggWeekly: req.body.eggWeekly,
        fishWeekly: req.body.fishWeekly,
        chickensWeekly: req.body.chickensWeekly,
        redMeatWeekly: req.body.redMeatWeekly,
        sugarWeekly: req.body.sugarWeekly,
        alcoholWeekly: req.body.alcoholWeekly,
        fermentationWeekly: req.body.fermentationWeekly,
        supplements: req.body.supplements,
        physicalActivity: req.body.physicalActivity,
        diabetes: req.body.diabetes,
        anemia: req.body.anemia,
        bloodPressure: req.body.bloodPressure,
        digestiveProblems: req.body.digestiveProblems,
        selfSafety: req.body.selfSafety,
        stroke: req.body.stroke,
        fattyLiver: req.body.fattyLiver,
        kidneyProblems: req.body.kidneyProblems,
        thyroid: req.body.thyroid,
        cancer: req.body.cancer,
        Migraine: req.body.Migraine,
        otherSickness: req.body.otherSickness,
        medicine: req.body.medicine,
        phoneNumber: req.body.phoneNumber,
        dietBmi: {
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
          }
    });
    mediterraneanForm = await mediterraneanForm.save();
    return res.send(mediterraneanForm); 
});

router.put('/:phoneNumber', async (req, res) => {
    const editedMediterraneanForm = await MediterraneanForm.findOneAndUpdate(
        { phoneNumber: req.params.phoneNumber },
        req.body,
        { new: true }
    );
    if (!editedMediterraneanForm) {
        return res.status(404).send("Such form with this phoneNumber does not exist."); 
    }
    return res.send(editedMediterraneanForm); 
});

router.delete('/:phoneNumber', async (req, res) => {
    const mediterraneanForm = await MediterraneanForm.findByIdAndDelete(req.params.phoneNumber);
    if (!mediterraneanForm) {
        return res.status(404).send("Mediterranean form with this phoneNumber does not exist."); 
    }
    return res.send(mediterraneanForm); 
});

module.exports = router;
