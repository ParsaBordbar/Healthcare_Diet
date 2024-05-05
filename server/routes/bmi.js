const express = require('express');
const router = express.Router();
const {validateBmi, BmiForm } = require('../models/bmiForm')

router.get('/', async(req, res) => {
    if(BmiForm){
        const bmiForms = await BmiForm.find().sort(req.params.id)
        res.send(bmiForms)
    }
    else res.send({"DataBase": "Empty!!!"}); 
})

router.get('/:id', async(req, res) => {
    const bmiForm = await BmiForm.findById(req.params.id);
    if(!bmiForm) res.status(404).send("BMI form with this ID was not found.")
    res.send(bmiForm)
})

//This will check for the Users phoneNumber from the frontEnd, and Gives back a Response
router.get('/', async(req, res)=>{
    const response = await BmiForm.findOne({phoneNumber:req.body.phoneNumber}, (err, result)=> {
        if(err){
            throw err 
            res.status(404)
        } 
        if(result){
            res.status(200).send("Yup we have it!")
            console.log(response);
        }
    }) 
})


router.post('/' ,async(req, res) => {
    const {error} = validateBmi(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    let form = new BmiForm({
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        wight: req.body.wight,
        bmi: (req.body.wight/(req.body.height * req.body.height)).toFixed(4), //bmi = wight/(height * height)
    })
    form = await form.save();
    res.send(form);
})

let form = new BmiForm({
    name: "John",
    lastName: "Doe",
    phoneNumber: "+1234567890",
    gender: "male",
    age: 30,
    height: 1.75,
    wight: 70,
    bmi: (70 / (1.75 * 1.75)).toFixed(4),
});

form.save()
    .then(doc => console.log('Document saved', doc))
    .catch(err => console.error('Error saving document', err));


router.put('/:id', async(req, res) => {
    const bmiForm = await BmiForm.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        age: req.body.age,
        height: req.body.height,
        wight: req.body.wight,
        bmi: (req.body.wight/(req.body.height * req.body.height)).toFixed(4),
    }, {new: true})
    if(!bmiForm) res.status(404).send("Such BMI form was not found.")
    res.send(bmiForm);
})

router.delete('/:id',async(req, res) => {
    const bmiForm = await BmiForm.findByIdAndDelete(req.params.id)
    res.send(bmiForm);
})
module.exports = router;