var express = require('express')
var router = express.Router();

router.use('/users', require('./users'));
router.use('/researchers', require('./researchers'));
router.use('/questions', require('./questions'));
router.use('/answers', require('./answers'));

module.exports = router