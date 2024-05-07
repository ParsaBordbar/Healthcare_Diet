const mongoose = require('mongoose');

const MediterraneanForm = mongoose.model('mediterranean_form', mongoose.Schema({
    dailyFruit : {
        type: String,
        required: true,
        enum: ['۱-۲ واحد', '۲-۳ واحد','۳-۴ واحد', 'هیچ'],
    },
    dailyVegetable : {
        type: String,
        required: true,
        enum: ['۱-۲ واحد', '۲-۳ واحد','۳-۴ واحد', 'هیچ'],
    },
    vegetables : {
        type: String,
        required: true,
        enum: ['۱-۲ واحد', '۲-۳ واحد','۳-۴ واحد', 'هیچ'],
    },
    Cereals: {
        type: String,
        required: true,
        enum: ['بله', 'خیر']
    },
    dailyCereals: {
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار','۳-۴ بار', 'هیچ']
    },
    potatoAndStarchWeek: {
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار', 'هر روز' , 'هیچ']
    }
    ,
    oliveAndOliveOilDai: {
        type: String,
        required: true,
        enum: ['۱ واحد', '۲ واحد','۳ واحد یا بیشتر ', 'هیچ']    
    },
    nutsDaily: {
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار','۳-۴ بار', 'هیچ']
    },
    dairyDaily: {
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۲-۳ بار','بیشتر از ۲ بار', 'هیچ']        
    },
    beans: {
        type: String,
        required: true,
        enum: ['روزانه', 'هفتگی', 'ماهیانه', 'هیچ']
    },
    eggWeekly: {
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۴-۳ بار','هر روز', 'هیچ']  
    },
    fishWeekly: {
        type: String,
        required: true,
        enum: ['۱ بار', '۲ بار','۳ بار', 'هیچ']  
    },
    chickensWeekly: {
        type: String,
        required: true,
        enum: ['۱-۲ بار','۳-۴ بار', 'هر روز', 'هیچ']  
    },
    chickensWeekly: {
        type: String,
        required: true,
        enum: ['۱-۲ بار','۳-۴ بار', 'هر روز', 'هیچ']  
    },
    sugarWeekly: {
        type: String,
        required: true,
        enum: ['۱ بار','۲-۳ بار', 'هر روز', 'هیچ'] 
    },
    alcoholWeekly: {
        type: String,
        required: true,
        enum: ['۱ بار','۲-۳ بار', 'هر روز', 'هیچ'] 
    },
    fermentationWeekly:{
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۴-۳ بار','هر روز', 'هیچ']  
    },
    supplements: { 
        type: String,
        required: true,
        selected: [String]
    },
    physicalActivity: {
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۴-۳ بار','هر روز', 'هیچ']  
    },
    diabetes: {
        type: String,
        required: true,
        enum: ['۱دیابت', 'دیابت۲','دیابت بارداری']  
    },
    anemia: {
        type: String,
        required: true,
        enum: ['فقر آهن', 'مینتور']
    },
    bloodPressure: {
        type: String,
        required: true,
        enum: ['بالا بودن فشار خون', 'پایین بودن فشارخون']
    },
    digestiveProblems: {
        type: String,
        required: true,
        enum: ['ریفلاکس', 'نفخ', 'یبوست']
    },
    selfSafety: {
        type: String, 
        required: true,
        selected: [String]
    },
    stroke: {
        type: String,
        required: true,
        enum: ['سکته قلبی', 'سکته مغزی']
    },
    fattyLiver: {
        type: String,
        required: true,
        enum: ['گرید۱', 'گرید۲', 'گرید۳']
    },
    kidneyProblems: {
        type: String,
        required: true,
        enum: ['سنگ کلیه', 'نارسایی کلیه', 'عفونت مجاری ادرار']
    },
    thyroid: {
        type: String,
        required: true, 
        enum: ['کم کار', 'پرکار', 'گره و التهاب تیروئید']
    },
    cancer: {
        type: Boolean
    },
    Migraine: {
        type: Boolean
    },
    otherSickness: {
        type: String
    },
    medicine: {
        type: String
    },
    phoneNumber: {
        type: String,
        type: String,
        required: true,
        maxlength: 11,   
    },
}))

exports.MediterraneanForm = MediterraneanForm;