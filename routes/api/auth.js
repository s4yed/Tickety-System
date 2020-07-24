const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../../controllers/auth.controller');
const { loginValidation, registerValidation } = require('../../utils/validations');

router.route('/signUp').post(registerValidation, authController.signUpUser);

router.route('/login').post(loginValidation, passport.authenticate('local'), authController.loginUser);

router.route('/logout').get(authController.logoutUser);

module.exports = router;
