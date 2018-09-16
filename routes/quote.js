var express = require('express');
var router = express.Router();


router.get('/:quoteSource', function(req, res) {
  var pick = req.query.pick
  var quoteSource = req.params.quoteSource

  var collection = req.app.locals[quoteSource]
  if(collection) {
    if(pick === "random") {
      res.send({
        q: collection.quotes[Math.floor(Math.random() * collection.quotes.length)]
      })
    } else {
      res.send(collection)
    }
  } else {
    res.send(404)
  }
});

module.exports = router;
