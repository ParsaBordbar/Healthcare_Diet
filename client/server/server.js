const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bmi = require('./routes/bmi')

app.use(cors());
app.use(express.json());
app.use('/api/bmi', bmi);

mongoose.connect('mongodb://localhost/healthcareDiet')
    .then(() => console.log("Connected to Mongodb :)"))
    .catch(() => (console.error("Could not connect to Mongodb.")));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));