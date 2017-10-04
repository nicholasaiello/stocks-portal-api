const express = require('express');
const router = express.Router();

// get charts for a unique id
router.get('/all/:uid', (req, res) => {

  let uid = req.params.uid;

  // test data
  res.send(
    {
      charts: [
        {id: 0, title: 'Watchlist', symbols: ['AMZN', 'BABA', 'XOM']},
        {id: 1, title: 'Open', symbols: ['HD', 'GPRO', 'SNAP']}
      ]
    }
  );
});

router.post('/add/:uid', (req, res) => {

  let uid = req.params.uid,
    data = req.body;

  // TODO add to DB if max charts not exceeded

  res.send({msg: 'Chart was added', success: true, result: {}});
});

router.delete('/remove/:uid/:cid', (req, res) => {

  let uid = req.params.uid,
    cid = req.params.cid;

  // TODO remove DB if exists

  res.send({msg: 'Chart was removed', success: true});
});


module.exports = router;