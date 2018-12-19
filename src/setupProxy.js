const proxy = require('http-proxy-middleware')

const PORT = process.env.PORT != null
  ? parseInt(process.env.PORT, 10)
  : 8080;

module.exports = function(app) {
  app.use(proxy('/api', { target: `http://localhost:${PORT}/` }))
}

// more info https://github.com/facebook/create-react-app/issues/5103
