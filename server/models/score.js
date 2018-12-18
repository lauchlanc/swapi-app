'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create Schema
var ScoreSchema = new _mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numGuesses: {
    type: Number,
    required: true
  }
}, {
  versionKey: false
});

var Score = _mongoose2.default.model('score', ScoreSchema);

exports.default = Score;