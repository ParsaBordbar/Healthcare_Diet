const express = require('express');
const router =  express.Router();
const uploader = require("../middlewares/multer");
const { doctorsComment } = require('../models/doctorComment');
const { MediterraneanForm, validateMediterranean } = require('../models/mediterraneanForm');

router.post("/upload/type", uploader.array("document", 5), async (req, res) => {

    const type = req.query.type

    if(type === "comments"){

        const { sender, body, receiver } = req.body;

        if (!sender || !body || !receiver) {
            return res.status(400).send("Error: sender, body, and receiver are required.");
        }
    
        if (req.files) {
            const filesWithMetadata = req.files.map(file => ({
                originalName: file.originalname,
                filename: file.filename,
                path: file.path,
                size: file.size,
                mimetype: file.mimetype,
            }));
    
            const comment = new doctorsComment({
                sender,
                body,
                receiver,
                files: filesWithMetadata
            });
    
            await comment.save();
            res.json(comment);
        } else {
            res.status(400).send("Error: No files uploaded or invalid file types.");
        }
    }
    if(type === 'mediterranean'){
        if (req.files) {
            const filesWithMetadata = req.files.map(file => ({
                originalName: file.originalname,
                filename: file.filename,
                path: file.path,
                size: file.size,
                mimetype: file.mimetype,
            }));

            const mediterraneanForm = new MediterraneanForm({
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
            return res.send(mediterraneanForm); 
    }
}
});
module.exports = router;