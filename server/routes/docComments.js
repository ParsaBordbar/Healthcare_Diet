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
router.get('/:receiver', async (req, res) => {
  try {
    if (doctorsComment) {
      const response = await doctorsComment.find({ receiver: req.params.receiver });
      if (response.length > 0) {
        return res.status(200).send(response);
      } else {
        return res.status(404).send({ "message": "No comments found for the given receiver." });
      }
    } else {
      return res.status(500).send({ "error": "Database connection issue." });
    }
  } catch (error) {
    return res.status(500).send({ "error": "An error occurred while fetching the comments.", "details": error.message });
  }
});


//NOTE: Reformating to have query's is better It will be implemented in the next Update.

// For getting all comments sorted by newest
router.get('/comments/newest', async (req, res) => {
  try {
    const response = await doctorsComment.find().sort({ createdAtGregorian: -1 });
    if (response.length > 0) {
      return res.status(200).send(response);
    } else {
      return res.status(404).send({ "message": "No comments found." });
    }
  } catch (error) {
    return res.status(500).send({ "error": "An error occurred while fetching the comments.", "details": error.message });
  }
});

// For getting all comments sorted by oldest
router.get('/comments/oldest', async (req, res) => {
  try {
    const response = await doctorsComment.find().sort({ createdAtGregorian: 1 });
    if (response.length > 0) {
      return res.status(200).send(response);
    } else {
      return res.status(404).send({ "message": "No comments found." });
    }
  } catch (error) {
    return res.status(500).send({ "error": "An error occurred while fetching the comments.", "details": error.message });
  }
});


router.delete('/:receiver', async (req, res) => {
  let response = await doctorsComment.deleteMany({ receiver: req.params.receiver });
  response = response.delete
  return res.send(response);
});

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