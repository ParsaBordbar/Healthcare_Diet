const mongoose = require('mongoose');
const Joi = require('joi');

const BmiForm = mongoose.model("Bmi_form", new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20,
    },
    lastName: {
        type: String,
        required: true,
        maxlength: 20,
    },
    phoneNumber: String,
    gender: {
        type: String,
        enum: "male" || "female"
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    wight: {
        type: Number,
        required: true
    }
}));

const validateBmi = (BmiForm) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        gender: Joi.string().required(),
        age: Joi.number().required(),
        height: Joi.number().required(),
        wight: Joi.number().required()
    });
    return schema.validate(BmiForm);
}

exports.BmiForm = BmiForm;
exports.validateBmi = validateBmi;