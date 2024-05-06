const mongoose = require('mongoose');
const Joi = require('joi');

const mediterraneanForm = mongoose.model('mediterranean_form', mongoose.Schema({
    dailyFruit : {
        required: true,
        enum: ['۱-۲ واحد', '۲-۳ واحد','۳-۴ واحد', 'هیچ'],
    },
    dailyVegtable : {
        required: true,
        enum: ['۱-۲ واحد', '۲-۳ واحد','۳-۴ واحد', 'هیچ'],
    },
    vegetables : {
        required: true,
        enum: ['۱-۲ واحد', '۲-۳ واحد','۳-۴ واحد', 'هیچ'],
    },
    Cereals: {
        required: true,
        enum: ['بله', 'خیر']
    },
    dailyCereals: {
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار','۳-۴ بار', 'هیچ']
    },
    
}))
module.exports = mediterraneanForm;