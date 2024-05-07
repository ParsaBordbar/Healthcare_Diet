const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bmi = require('./routes/bmi');
const mediterranean = require('./routes/mediterranean');
const admin = require('./models/admin');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/bmi', bmi);
app.use('/api/mediterranean', mediterranean);
app.use('/api/admin', admin);


mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Connected to Mongodb :)"))
    .catch(() => (console.error("Could not connect to Mongodb.")));

app.get('/', async( req, res) => {
    res.send("This is the BackEnd of the Diet Project")
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));