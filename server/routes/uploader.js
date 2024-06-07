const express = require('express');
const router =  express.Router();
const uploader = require("../middlewares/multer");
const { doctorsComment } = require('../models/doctorComment');

router.post("/upload", uploader.array("document", 5), async (req, res) => {
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
});
module.exports = router;