const express = require('express');
const router = express.Router();
const { verifyUser } = require('../../utils/authenticate');
const userController = require('../../controllers/user.controller');

router.route('/user_data').get(verifyUser, userController.getUserData);

router.route('/update_profile').post(verifyUser, userController.updateUserData);

router.route('/update_token').post(verifyUser, userController.updateUserToken);

router.route('/reset_pass').post(verifyUser, userController.resetUserPass);

router.route('/admin').get(verifyUser, userController.isAdminUser);

router.route('/add_ticket').post(verifyUser, userController.addTicket);

router.route('/remove_ticket').post(verifyUser, userController.removeTicket);

module.exports = router;
