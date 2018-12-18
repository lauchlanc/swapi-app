'use strict';

var proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/api', { target: 'http://localhost:8080/' }));
};

// more info https://github.com/facebook/create-react-app/issues/5103