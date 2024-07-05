const mongoose = require('mongoose');
const Joi = require('joi');
const moment = require('moment');
const momentJalaali = require('moment-jalaali');

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
    city: {
      type: String,
      required: true,
      maxlength: 20,
    },
    phoneNumber: {
        type: String,
        required: true,
        maxlength: 11,
        unique: true,    
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
    hipcircumference: {
        type: Number,
        required: true
    },
    joinedAtGregorian: {
        type: Date,
      },
    joinedAtJalali: {
        type: String,
        // default: () => momentJalaali().format('jYYYY/jM/jD HH:mm:ss'),
      },
    bmi: {
        type: Number,
        required: true
    },
   whr: {
        type: Number,
        required: true
    },
   autoIncrementId: {
        type: Number,
        unique: true
    }

}));

bmiFormSchema.plugin(AutoIncrement, { inc_field: 'autoIncrementId', start_seq: 1 }>

//const BmiForm = mongoose.model("Bmi_form", bmiFormSchema);

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
        city: Joi.string().required().messages({
         'any.required': 'لطفا شهر را وارد کنید'
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
	hipcircumference: Joi.number().required().messages({
	   'any.required': 'دور باسن را وارد کنید'
	}),
        joinedAtGregorian: Joi.string().isoDate(),
        joinedAtJalali: Joi.string(),
    });
    return schema.validate(BmiForm);
}

exports.BmiForm = BmiForm;
exports.validateBmi = validateBmi;
