var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'City of Weslaco' });
});

router.get('/jobs', function(req, res, next) {
  res.render('jobs', { title: 'Weslaco Jobs' });
});

router.get('/residents', function(req, res, next) {
  res.render('residents', { title: 'Weslaco Residents' });
});

router.get('/parks', function(req, res, next) {
  res.render('parks', { title: 'Weslaco Parks & Recreation' });
});

router.get('/visitors', function(req, res, next) {
  res.render('visitors', { title: 'Weslaco Visitors' });
});

router.get('/business', function(req, res, next) {
  res.render('business', { title: 'Business News' });
});

router.get('/government', function(req, res, next) {
  res.render('government', { title: 'Government News' });
});

router.get('/utilities', function(req, res, next) {
  res.render('utilities', { title: 'Weslaco Utilities' });
});


module.exports = router;
