const mongoose = require('mongoose');
const Joi = require('joi');


const fileSchema = new mongoose.Schema({
originalName: String,
filename: String,
path: String,
size: Number,
mimetype: String,
});

const bmiSchema = new mongoose.Schema({
age: {
    type: Number,
    required: true,
},
height: {
    type: Number,
    required: true,
},
weight: {
    type: Number,
    required: true,
},
abdominalCircumference: {
    type: Number,
    required: true,
},
dietName: {
    type: String,
    required: true,
},
bmi: {
    type: Number,
    required: true,
},
});

const MediterraneanForm = mongoose.model(
"mediterranean_form",
new mongoose.Schema({
    // Other fields...
    files: [fileSchema],
    payment: fileSchema,
    createdAtGregorian: {
    type: Date,
    },
    createdAtJalali: {
    type: String,
    },
    dietBmi: bmiSchema,
})
);

const validateMediterranean = (mediterraneanForm) => {
const schema = Joi.object({
    // Other fields...
    files: Joi.array().items(
    Joi.object({
        originalName: Joi.string().required(),
        filename: Joi.string().required(),
        path: Joi.string().required(),
        size: Joi.number().required(),
        mimetype: Joi.string().required(),
    })
    ),
    payment: Joi.object({
    originalName: Joi.string().required(),
    filename: Joi.string().required(),
    path: Joi.string().required(),
    size: Joi.number().required(),
    mimetype: Joi.string().required(),
    }).required(),
    createdAtGregorian: Joi.string().isoDate().required(),
    createdAtJalali: Joi.string().required(),
    dietBmi: Joi.object({
    age: Joi.number().required(),
    height: Joi.number().required(),
    weight: Joi.number().required(),
    abdominalCircumference: Joi.number().required(),
    dietName: Joi.string().required(),
    }),
});
return schema.validate(mediterraneanForm);
};

exports.MediterraneanForm = MediterraneanForm;
exports.validateMediterranean = validateMediterranean;
