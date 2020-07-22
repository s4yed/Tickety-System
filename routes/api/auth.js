const express = require('express');
const router = express.Router();
const authController = require('../../controllers/auth.controller')

router.route('/signup').post(authController.signupUser);

router.route('/login').post(loginValidation, passport.authenticate('local'), authController.loginUser);

router.route('/logout').get(authController.logoutUser);

module.exports = router;
