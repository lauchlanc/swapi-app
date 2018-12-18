'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

require('../shared/types');

var _keys = require('./config/keys');

var _scores = require('./routes/api/scores');

var _scores2 = _interopRequireDefault(_scores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT != null ? parseInt(process.env.PORT, 10) : 5000;

_mongoose2.default.connect(_keys.mongoURI, { useNewUrlParser: true }).catch(function (e) {
  return console.log(e);
});

var app = (0, _express2.default)();

app.use(_express2.default.static(_path2.default.join(__dirname, '..', '..', 'build'), { index: false }));

app.get('/api/about', function (req, res) {
  var about = {
    about: 'This is a sample app that uses the Star Wars API (SWAPI), with React to play a simple guessing game!'
  };

  res.json(about);
});

app.use('/api/scores', (0, _cors2.default)(), _scores2.default);

app.get('*', function (req, res) {
  res.sendFile(_path2.default.join(__dirname, '..', '..', 'build', 'index.html'));
});

app.listen(PORT, function () {
  console.log('Server listening on port ' + PORT);
});