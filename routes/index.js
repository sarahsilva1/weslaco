var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'City of Weslaco' });
});

/*  return to home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'City of Weslaco' });
});

/* GET news page. */
router.get('/news', function(req, res, next) {
  res.render('news', { title: 'Weslaco News' });
});

/* GET residents page. */
router.get('/residents', function(req, res, next) {
  res.render('residents', { title: 'Weslaco Residents' });
});

/* GET visitors page. */
router.get('/visitors', function(req, res, next) {
  res.render('visitors', { title: 'Weslaco Visitors' });
});

/* GET Business page. */
router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Business News' });
});

/* GET government page. */
router.get('/government', function(req, res, next) {
  res.render('government', { title: 'Government News' });
});

module.exports = router;
