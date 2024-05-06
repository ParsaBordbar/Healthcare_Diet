const mongoose = require('mongoose');
const Joi = require('joi');

const admin = mongoose.model('admin_login', new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    }

}));

const validateAdmin = (admin) => {
    const schema = Joi.object({
        userName: Joi.string().required().messages({
            'string.empty': `نام کاربری را وارد کنید`
        }),
        password: Joi.string().required().messages(),
        role: Joi.string().required()
        })
        return schema.validate(admin);
    }
exports.admin = admin;
exports.validateAdmin = validateAdmin;