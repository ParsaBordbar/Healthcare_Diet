const mongoose = require('mongoose');
const moment = require('moment');
const momentJalaali = require('moment-jalaali');
const Joi = require('joi');

//Dear Future Parsa if you forget this is the schema for files metaData.
const fileSchema = new mongoose.Schema({
  originalName: String,
  filename: String,
  path: String,
  size: Number,
  mimetype: String,
});

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
    type: String,
    ref: "Bmi_form",
    required: true,
  },
  files: [fileSchema], //This field is the Collection of the meta data for file
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
    files: Joi.array().items(Joi.object({
      originalName: Joi.string().required(),
      filename: Joi.string().required(),
      path: Joi.string().required(),
      size: Joi.number().required(),
      mimetype: Joi.string().required(),
    })),
    createdAtGregorian: Joi.string().isoDate().required(),
    createdAtJalali: Joi.string().required(),
  });
  return schema.validate(doctorsComment);
};

exports.doctorsComment = doctorsComment;
exports.validateDoctorsComment = validateDoctorsComment;
