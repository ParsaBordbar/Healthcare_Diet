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
        // required: true
    },
    dietName: {
        type: String,
        required: true
    },
    bmi: {
        type: Number,
        required: true
    }
  })

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
    potatoAndStarchWeekly: {
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۳-۴ بار', 'هر روز' , 'هیچ']
    }
    ,
    oliveAndOliveOilDaily: {
        type: String,
        required: true,
        enum: ['۱ واحد', '۲ واحد','۳ واحد یا بیشتر', 'هیچ']    
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
        enum: ['۱-۲ بار', '۳-۴ بار','هر روز', 'هیچ']  
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
    redMeatWeekly: {
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
    fastFoodWeekly: {
        type: String,
        // required: true,
        enum: [' ۱-۲ بار','۳-۴ بار', 'هر روز', 'یک روز در ماه یا هیچ'] 
    },
    fermentationWeekly:{
        type: String,
        required: true,
        enum: ['۱-۲ بار', '۳-۴ بار','هر روز', 'هیچ']  
    },
    supplements: { 
        type: [String],
        required: true,
    },
    physicalActivity: {
        type: String,
        required: true,
        enum: ['۱ تا ۲ روز', '۳-۴ روز','هر روز', 'هیچ']  
    },
    diabetes: {
        type: String,
        required: true,
        enum: ['دیابت نوع ۱', 'دیابت نوع ۲','دیابت بارداری', "ندارم"]  
    },
    bloodPressure: {
        type: String,
        required: true,
        enum: ['بالا بودن فشار خون', 'پایین بودن فشار خون', "ندارم"]
    },
    digestiveProblems: {
        type: String,
        required: true,
        enum: ['ریفلاکس', 'نفخ', 'یبوست', "ندارم"]
    },
    selfSafety: {
        type: String, 
        required: true,
        enum: ['آسم و آلرژی', 'ام اس', 'لوپوس', 'آرتریت روماتوئید', 'سایر بیماری های خودایمنی', 'ندارم']
    },
    stroke: {
        type: String,
        required: true,
        enum: ['سکته قلبی', 'سکته مغزی',"ندارم"]
    },
    fattyLiver: {
        type: String,
        required: true,
        enum: ['گرید۱', 'گرید۲', 'گرید۳',"ندارم"]
    },
    kidneyProblems: {
        type: String,
        required: true,
        enum: ['سنگ کلیه', 'نارسایی کلیه', 'عفونت مجاری ادرار',"ندارم"]
    },
    thyroid: {
        type: String,
        required: true, 
        enum: ['کم کار', 'پرکار', 'گره و التهاب تیروئید',"ندارم"]
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
    foodAllergies:{
        type: String
    },
    pregnancyWeeks:{
        type: String
    },
    breastfeeding:{
        type: String
    },
    phoneNumber: {
        type: String,
        required: true,
        maxlength: 11,
    },
    payment: fileSchema,
    files: [fileSchema],
    createdAtGregorian: {
        type: Date,
      },
      createdAtJalali: {
        type: String,
      },
      dietBmi: bmiSchema,
      isChecked: {
        type: Boolean,
        default: false,
    },
}))


const validateMediterranean = (mediterraneanForm) => {
    const schema = Joi.object({
        dailyFruit : Joi.string().required(),
        dailyVegetable : Joi.string().required(),
        Cereals: Joi.string().required(),
        dailyCereals: Joi.string().required(),
        potatoAndStarchWeekly: Joi.string().required(),
        oliveAndOliveOilDaily: Joi.string().required(),
        nutsDaily: Joi.string().required(),
        dairyDaily: Joi.string().required(),
        beans: Joi.string().required(),
        eggWeekly: Joi.string().required(),
        fishWeekly: Joi.string().required(),
        chickensWeekly: Joi.string().required(),
        redMeatWeekly: Joi.string().required(),
        sugarWeekly: Joi.string().required(),
        alcoholWeekly: Joi.string().required(),
        fastFoodWeekly: Joi.string(),
        fermentationWeekly: Joi.string().required(),
        supplements: Joi.array().items(Joi.string().required()),
        physicalActivity: Joi.string().required(),
        diabetes: Joi.string().required(),
        // anemia: Joi.string().required(),
        bloodPressure: Joi.string().required(),
        digestiveProblems: Joi.string().required(),
        selfSafety: Joi.string().required(),
        stroke: Joi.string().required(),
        fattyLiver: Joi.string().required(),
        kidneyProblems: Joi.string().required(),
        thyroid: Joi.string().required(),
        cancer: Joi.boolean().required(),
        Migraine: Joi.boolean().required(),
        otherSickness: Joi.string().required(),
        medicine: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        createdAtGregorian: Joi.string().isoDate().required(),
        createdAtJalali: Joi.string().required(),
        files: Joi.array().items(Joi.object({
            originalName: Joi.string().required(),
            filename: Joi.string().required(),
            path: Joi.string().required(),
            size: Joi.number().required(),
            mimetype: Joi.string().required(),
          })),
        dietBmi: Joi.object({
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
	   hipcircumference: Joi.number().messages({
		'any.required': 'دور باسن را وارد کنید'
	  }), dietName: Joi.string().required(),
        }),
        payment:Joi.object({originalName: Joi.string().required(),
            filename: Joi.string().required(),
            path: Joi.string().required(),
            size: Joi.number().required(),
            mimetype: Joi.string().required()
        }),
        isChecked: Joi.boolean(),
    })
    return schema.validate(mediterraneanForm);
}
exports.MediterraneanForm = MediterraneanForm;
exports.validateMediterranean = validateMediterranean
