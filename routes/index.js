const express = require('express');
const router = express.Router();

router.get('/', function(res, req) {
	// user shoudln't get here
	res.render('error', {title: 'Express'});
});

module.exports = router;
