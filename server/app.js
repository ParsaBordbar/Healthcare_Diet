const express = require("express");
const app = express();
const cors = require('cors');
const path = require("path");
const bmi = require('./routes/bmi');
const mediterranean = require('./routes/mediterranean');
const adminLogin = require('./routes/admin');
const doctorsComment = require('./routes/docComments');
const uploader = require('./routes/uploader'); 

app.use(cors());
app.use(express.json());
app.use('/api/bmi', bmi);
app.use('/api/mediterranean', mediterranean);
app.use('/api/admin', adminLogin);
app.use('/api/doctorsComment', doctorsComment);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api/uploader', uploader);

module.exports = app;
