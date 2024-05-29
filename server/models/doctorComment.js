const mongoose = require('mongoose');
const moment = require('moment');
const momentJalaali = require('moment-jalaali');
const Joi = require('joi');

const doctorsCommentSchema = new mongoose.Schema({
  sender: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  receiver: {
    type: String, //mongoose.type.ObjectId
    ref: "Bmi_form",
    required: true,
  },
  createdAtGregorian: {
    type: Date,
    default: Date.now,
  },
  createdAtJalali: {
    type: String,
    default: () => momentJalaali().format('jYYYY/jM/jD HH:mm:ss'),
  },
});

const doctorsComment = mongoose.model('doctors_comment', doctorsCommentSchema);

const validateDoctorsComment = (doctorsComment) => {
    const schema = Joi.object({
      sender: Joi.string().required(),
      body: Joi.string().required(),
      receiver: Joi.string().required(),
      createdAtGregorian: Joi.string().isoDate().required(),
      createdAtJalali: Joi.string().required(),
    });
    return schema.validate(doctorsComment);
  };

exports.doctorsComment = doctorsComment;
exports.validateDoctorsComment = validateDoctorsComment;
