const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const uploader = require("./middlewares/multer");
const bmi = require('./routes/bmi');
const mediterranean = require('./routes/mediterranean');
const adminLogin = require('./routes/admin');
const doctorsComment = require('./routes/docComments');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/bmi', bmi);
app.use('/api/mediterranean', mediterranean);
app.use('/api/admin', adminLogin);
app.use('/api/doctorsComment', doctorsComment);

app.post("/", uploader.array("document", 5), async (req, res) => {
    if (req.files) {
        res.json(req.files);
    } else {
        res.status(400).send("Error: No files uploaded or invalid file types.");
    }
});

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Connected to Mongodb :)"))
    .catch((err) => console.error("Could not connect to Mongodb.", err));

app.get('/', async (req, res) => {
    res.send("This is the BackEnd of the Diet Project");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
