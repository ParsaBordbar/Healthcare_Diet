const express = require('express');
const router = express.Router();
const uploader = require("../middlewares/multer");
const { doctorsComment } = require('../models/doctorComment');
const { MediterraneanForm } = require('../models/mediterraneanForm');
const momentJalaali = require('moment-jalaali');

router.post("/upload/type", uploader.fields([{ name: 'document', maxCount: 5 }, { name: 'payment', maxCount: 1 }]), async (req, res) => {
    const type = req.query.type;

    if (type === "comments") {
        const { sender, body, receiver } = req.body;
        if (!sender || !body || !receiver) {
            return res.status(400).send("Error: sender, body, and receiver are required.");
        }

        if (req.files) {
            const filesWithMetadata = req.files.document ? req.files.document.map(file => ({
                originalName: file.originalname,
                filename: file.filename,
                path: file.path,
                size: file.size,
                mimetype: file.mimetype,
            })) : [];

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

    if (type === 'mediterranean') {
        if (req.files) {
            const filesWithMetadata = req.files.document ? req.files.document.map(file => ({
                originalName: file.originalname,
                filename: file.filename,
                path: file.path,
                size: file.size,
                mimetype: file.mimetype,
            })) : [];

            // Handle the payment file separately and check if it exists
            let paymentFile = null;
            if (req.files.payment && req.files.payment.length > 0) {
                const payment = req.files.payment[0];
                paymentFile = {
                    originalName: payment.originalname,
                    filename: payment.filename,
                    path: payment.path,
                    size: payment.size,
                    mimetype: payment.mimetype,
                };
            }

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
                cancer: req.body.cancer === "true", 
                Migraine: req.body.Migraine === "true", 
                otherSickness: req.body.otherSickness,
                medicine: req.body.medicine,
                phoneNumber: req.body.phoneNumber,
                files: filesWithMetadata,
                payment: paymentFile, 
                createdAtJalali: momentJalaali().format('jYYYY/jM/jD HH:mm:ss'),
                dietBmi: {
                    age: req.body.age,
                    height: req.body.height,
                    weight: req.body.weight,
                    abdominalCircumference: req.body.abdominalCircumference,
                    dietName: req.body.dietName,
                    bmi: (req.body.weight / ((req.body.height / 100) ** 2)).toFixed(4),
                },
            });

            try {
                const savedForm = await mediterraneanForm.save();
                return res.send(savedForm);
            } catch (err) {
                return res.status(400).send(err.message);
            }
        } else {
            res.status(400).send("Error: No files uploaded or invalid file types.");
        }
    }
});

module.exports = router;