const express = require('express');
const router = express.Router();


// stock price by symbol
router.get('/:id', (req, res) => {
  let id = req.params.id;

  res.send({
  	result: {price: 1.00, updated: +new Date}
  });
});

// get list of stocks, by symbol
router.get('/all/:ids', (req, res) => {
  let ids = req.params.ids.split(',');

  res.send({
    result: [{price: 1.00, updated: +new Date}]
  });
});


module.exports = router;
