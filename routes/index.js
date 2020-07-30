var express = require('express')
var router = express.Router();

router.use('/questions', require('./questions'));
router.use('/users', require('./users'));

/*
router.use('/restaurants', require('./restaurants'));
router.use('/orders', require('./orders'));
router.use('/products', require('./products'))
*/

module.exports = router