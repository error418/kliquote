var express = require('express');
var router = express.Router();


router.get('/:quoteSource', function(req, res) {
  var pick = req.query.pick
  var quoteSource = req.params.quoteSource

  var quotes = req.app.locals[quoteSource]
  if(quotes) {
    if(pick === "random") {
      res.send({
        q: quotes[Math.floor(Math.random() * quotes.length)]
      })
    } else {
      res.send(quotes)
    }
  } else {
    res.send(404)
  }
});

module.exports = router;
