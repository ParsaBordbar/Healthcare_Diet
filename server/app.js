const fs = require('fs');
const express = require("express");
const path = require("path");
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");
const bmi = require('./routes/bmi');
const mediterranean = require('./routes/mediterranean');
const adminLogin = require('./routes/admin');
const doctorsComment = require('./routes/docComments');
const uploader = require('./routes/uploader');
const smsService = require('./routes/sms');
const logger = require('./middlewares/logger');

const app = express();

const uploadsDir = path.join(__dirname, "uploads")
if(!fs.existsSync(uploadsDir)){
    fs.mkdirSync(uploadsDir, { recursive: true });
    console.log("uploads was not in file tree, we made it!");
}else{
    console.log('uploads exists!');
}

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(logger); 
app.use('/api/bmi', bmi);
app.use('/api/mediterranean', mediterranean);
app.use('/api/admin', adminLogin);
app.use('/api/doctorsComment', doctorsComment);
app.use("/uploads", express.static(uploadsDir));
app.use('/api/uploader', uploader);
app.use('/api/sms', smsService);
app.use(morgan('combined')); 

module.exports = app;
