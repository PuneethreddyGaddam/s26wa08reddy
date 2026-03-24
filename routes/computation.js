var express = require('express');
var router = express.Router();

// Computes atan(opposite / adjacent) for a right triangle in radians.
router.get('/', function(req, res, next) {
  var x = req.query.x;
  var opposite = x !== undefined ? Number(x) : Math.random() * 10;
  var adjacent = Math.random() * 10 + 1;

  if (Number.isNaN(opposite)) {
    return res.status(400).send('x must be a number');
  }

  var y = Math.atan(opposite / adjacent);
  res.send(`atan applied to ${opposite} is ${y}`);
});

module.exports = router;
