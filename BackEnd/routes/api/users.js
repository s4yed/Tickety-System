const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');


//const { check, validationResult } = require("express-validator");
const User = require('../../models/User');

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please Enter a password with 6  or more characters').isLength({ min: 6 })
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { name, email, password } = req.body;

        try {

            let user = await User.findOne({ email });

            if (user) {
                res.status(400).json({ errors: [{ msg: 'User already exists' }] });
            } else {
                User.create(req.body).then(user => {
                    const avatar = gravatar.url(email, {
                        s: '200',
                        r: 'pg',
                        d: 'mm'
                    });    
                    // const salt = bcrypt.getSalt(10);
                    // user.password = bcrypt.hash(password, salt);
        
                    user.save().then(user => {

                        res.json(user);
                    });
        
            
                    
                })
                
                
            }

            
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error')
        }
    });

module.exports = router;