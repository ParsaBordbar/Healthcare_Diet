const express = require('express');
const router =  express.Router();
const uploader = require("../middlewares/multer");

app.post("/uploader", uploader.array("document", 5), async (req, res) => {
    if (req.files) {
        res.json(req.files);
    } else {
        res.status(400).send("Error: No files uploaded or invalid file types.");
    }
});
module.exports = router;