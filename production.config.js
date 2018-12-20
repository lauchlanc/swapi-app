module.exports = {
  apps: [{
    name: 'swapi-app',
    script: './dist/server.js',
    env: {
      NODE_PATH: 'dist/',
      NODE_ENV: 'production',
    },
  }],
};
