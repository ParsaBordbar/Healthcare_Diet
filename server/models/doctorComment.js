const Joi = require('joi');
const mongoose = require('mongoose');

const doctorsComment = mongoose.model('doctors_comment' ,new mongoose.Schema({
    sender: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    receiver:{
        type: String, //mongoose.type.ObjectId
        ref: "Bmi_form",
        required: true,
    },
}))

const validateDoctorsComment = (doctorsComment) => {
    const schema = Joi.object({
        sender: Joi.string().required(),
        body: Joi.string().required(),
        receiver: Joi.string().required(),
    })
    return schema.validate(doctorsComment)
}

exports.doctorsComment = doctorsComment;
exports.validateDoctorsComment = validateDoctorsComment;