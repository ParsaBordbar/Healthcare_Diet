const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const bmi = require('./routes/bmi');
const mediterranean = require('./routes/mediterranean');
const adminLogin = require('./routes/admin');
const doctorsComment = require('./routes/docComments');
const uploader = require('./routes/uploader'); // Import uploader middleware
const path = require("path");
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/bmi', bmi);
app.use('/api/mediterranean', mediterranean);
app.use('/api/admin', adminLogin);
app.use('/api/doctorsComment', doctorsComment);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use('/api/uploader', uploader);

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Connected to Mongodb :)"))
    .catch((err) => console.error("Could not connect to Mongodb.", err));

app.get('/', async (req, res) => {
    res.send("This is the BackEnd of the Diet Project");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));
