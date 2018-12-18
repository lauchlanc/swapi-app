'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _score = require('../../models/score');

var _score2 = _interopRequireDefault(_score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// Scores model


// @route GET api/scores
// @desc Gets all scores
// @access public
router.get('/', function (req, res) {
  _score2.default.find().sort({ numGuesses: -1 }).then(function (scores) {
    return res.json(scores);
  });
});

// @route PUT api/scores
// @desc increment score by one for current name
// @access public
router.put('/:name', function (req, res) {
  _score2.default.findOneAndUpdate({ name: req.params.name }, { $inc: { numGuesses: 1 } }, {
    new: true,
    upsert: true
  }, function (err, score) {
    if (err) {
      res.send(err);
    }
    res.json(score);
  });
});

exports.default = router;