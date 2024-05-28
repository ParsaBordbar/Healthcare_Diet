const express = require('express');
const router = express.Router();
const { validateDoctorsComment, doctorsComment } = require('../models/doctorComment');

//For all comments
router.get('/', async(req, res)=> {
    if(doctorsComment){
        const response = await doctorsComment.find().sort(req.params.id);
        return res.send(response);
    }
    else
        return res.send({ "DataBase": "Empty!!!" })
})

//For all comments for a certain user
router.get('/:phoneNumber', async(req, res) => {

})

//For posting a new Comment
router.post('/', async(req, res) => {
    try {
        const { error } = validateDoctorsComment(req.body);
        if (error) {
          return res.status(400).send(error.details[0].message);
        }
        let comment = new doctorsComment({
          sender: req.body.sender,
          body :req.body.body,
          receiver: req.body.receiver
        });
    
        comment = await comment.save();
      return res.send(comment);
  
    } catch (err) {
      console.error("An error occurred:", err);
      return res.status(500).send("Internal Server Error");
    }
})

module.exports = router;