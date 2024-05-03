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
    phoneNumber: {
        type: String,
        required: true,
        maxlength: 11,
    },
    gender: {
        type: String,
        enum: ['male', 'female']
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
    },
    bmi: {
        type: Number,
        required: true
    } 
}));

const validateBmi = (BmiForm) => {
    const schema = Joi.object({
        name: Joi.string().required().messages({
            'string.empty': `نام نمی‌تواند خالی باشد`,
            'any.required': `نام خودتون رو وارد کنید`
          }),
        lastName: Joi.string().required().messages({
            'string.empty': `نام خانوادگی نمی‌تواند خالی باشد`,
            'any.required': `نام خانوادگی خودتون رو وارد کنید`
          }),
        phoneNumber: Joi.string().pattern(/^[0-9]+$/).required().max(11).min(11).messages({
            'string.max': "شماره تماس یازده رقم است" ,
            'string.min': "شماره تماس یازده رقم است", 
            'string.pattern.base': 'شماره تماس تنها شامل اعداد می‌باشد'
        }),
        gender: Joi.string().required().messages({
            'string.empty': `لطفا جنسیت را تعیین کنید`,
            'any.required': `لطفا جنسیت را تعیین کنید`,
            'string.pattern.base': 'شماره تماس تنها شامل رقم می‌شود'
          }),
        age: Joi.number().required().messages({
            'any.required': `سن را وارد کنید`
        }),
        height: Joi.number().required().messages({
            'any.required': `قد را وارد کنید`
        }),
        wight: Joi.number().required().messages({
            'any.required': `وزن را وارد کنید`
        }),
    });
    return schema.validate(BmiForm);
}

exports.BmiForm = BmiForm;
exports.validateBmi = validateBmi;