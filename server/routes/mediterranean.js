const express = require('express');
const router = express.Router();
const { MediterraneanForm, validateMediterranean } = require('../models/mediterraneanForm');

router.get('/', async (req, res) => {
    if (MediterraneanForm) {
        const mediterraneanForms = await MediterraneanForm.find().sort(req.params.id);
        return res.send(mediterraneanForms); // Use return
    } else {
        return res.send({ "DataBase": "NO mediterraneanForms yet!" }); // Use return
    }
});

router.get('/:phoneNumber', async (req, res) => {
    const mediterraneanForm = await MediterraneanForm.findOne({ phoneNumber: req.params.phoneNumber });
    if (!mediterraneanForm) {
        return res.status(404).send("Mediterranean with this phoneNumber was not found."); // Use return
    }
    return res.send(mediterraneanForm); // Use return
});

router.post('/', async (req, res) => {
    const { error } = validateMediterranean(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message); // Use return
    }
    let phoneNumberCheck = await MediterraneanForm.findOne({ phoneNumber: req.body.phoneNumber });
    if (phoneNumberCheck) {
        return res.status(400).send("Such phone number is already registered."); // Use return
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
    });
    mediterraneanForm = await mediterraneanForm.save();
    return res.send(mediterraneanForm); // Use return
});

router.put('/:phoneNumber', async (req, res) => {
    const editedMediterraneanForm = await MediterraneanForm.findOneAndUpdate(
        { phoneNumber: req.params.phoneNumber },
        req.body,
        { new: true }
    );
    if (!editedMediterraneanForm) {
        return res.status(404).send("Such form with this phoneNumber does not exist."); // Use return
    }
    return res.send(editedMediterraneanForm); // Use return
});

router.delete('/:phoneNumber', async (req, res) => {
    const mediterraneanForm = await MediterraneanForm.findByIdAndDelete(req.params.phoneNumber);
    if (!mediterraneanForm) {
        return res.status(404).send("Mediterranean form with this phoneNumber does not exist."); // Use return
    }
    return res.send(mediterraneanForm); // Use return
});

module.exports = router;
