import { PORT } from './server';
const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(proxy('/api', { target: `http://localhost:${PORT}/` }))
}

// more info https://github.com/facebook/create-react-app/issues/5103
