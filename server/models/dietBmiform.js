const mongoose = require('mongoose');
const Joi = require('joi');


const DietBmiForm = mongoose.model("Diet_Bmi_form", new mongoose.Schema({
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
        enum: ['مرد', 'زن']
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    abdominalCircumference: {
        type: Number,
        required: true
    },
    sendAtGregorian: {
        type: Date,
    },
    sendAtJalali: {
        type: String,
    },
    dietName: {
        type: String,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    } 
}));

const validateDietBmi = (DietBmiForm) => {
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
          }),
        age: Joi.number().required().messages({
            'any.required': `سن را وارد کنید`
        }),
        height: Joi.number().required().messages({
            'any.required': `قد را وارد کنید`
        }),
        weight: Joi.number().required().messages({
            'any.required': `وزن را وارد کنید`
        }),
        abdominalCircumference: Joi.number().required().messages({
            'any.required': `دور شکم را وارد کنید`
        }),
        dietName: Joi.string().required(),
        sendAtGregorian: Joi.string().isoDate(),
        sendAtJalali: Joi.string(),
    });
    return schema.validate(DietBmiForm);
}

exports.DietBmiForm = DietBmiForm;
exports.validateDietBmi = validateDietBmi;