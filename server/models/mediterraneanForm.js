const mongoose = require('mongoose');
const Joi = require('joi');

const mediterraneanForm = mongoose.model('mediterranean_form', mongoose.Schema({
    dailyFruit : {
        required: true,
        enum: ['۱-۲ واحد', '۲-۳ واحد','۳-۴ واحد', 'هیچ'],
    },
    dailyVegetable : {
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
    potatoAndStarchWeekly: {
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار', 'هر روز' , 'هیچ']
    }
    ,
    oliveAndOliveOilDaily: {
        required: true,
        enum: ['۱ واحد', '۲ واحد','۳ واحد یا بیشتر ', 'هیچ']    
    },
    nutsDaily: {
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار','۳-۴ بار', 'هیچ']
    },
    dairyDaily: {
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار','بیشتر از ۲ بار', 'هیچ']        
    },
    beans: {
        required: true,
        enum: ['روزانه', 'هفتگی', 'ماهیانه', 'هیچ']
    },
    eggWeekly: {
        required: true,
        enum: ['۱-۲ بار', '۴-۳ بار','هر روز', 'هیچ']  
    },
    fishWeekly: {
        required: true,
        enum: ['۱ بار', '۲ بار','۳ بار', 'هیچ']  
    },
    chickensWeekly: {
        required: true,
        enum: ['۱-۲ بار','۳-۴ بار', 'هر روز', 'هیچ']  
    },
    chickensWeekly: {
        required: true,
        enum: ['۱-۲ بار','۳-۴ بار', 'هر روز', 'هیچ']  
    },
    sugarWeekly: {
        required: true,
        enum: ['۱ بار','۲-۳ بار', 'هر روز', 'هیچ'] 
    },
    alcoholWeekly: {
        required: true,
        enum: ['۱ بار','۲-۳ بار', 'هر روز', 'هیچ'] 
    },
    fermentationWeekly: {
        required: true,
        enum: ['۱-۲ بار', '۴-۳ بار','هر روز', 'هیچ']  
    },
    supplements: { //This is a multi select 
        required: true,

    },
    physicalActivity: {
        required: true,
        enum: ['۱-۲ بار', '۴-۳ بار','هر روز', 'هیچ']  
    },
    diabetes: {
        required: true,
        enum: ['۱دیابت', 'دیابت۲','دیابت بارداری']  
    }
}))
module.exports = mediterraneanForm;