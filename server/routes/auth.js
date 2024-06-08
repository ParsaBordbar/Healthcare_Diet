const express = require("express");
const controller = require('')
const router = express.Router();

router.post("/register", controller.register);
// router.post("/login", controller.login);
// router.post('/me', register.getMe);

module.exports = router;