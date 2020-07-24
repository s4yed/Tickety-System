var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express',
        proc: 'JSON.stringify(console.log(process.env))',
    });
});

module.exports = router;
