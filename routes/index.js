var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', num: 33322222222222222222 }); 
});

module.exports = router;
