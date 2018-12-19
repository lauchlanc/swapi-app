module.exports = {
  apps: [{
    name: 'swapi-app',
    script: './server.js',
    interpreter: 'babel-node',
    interpreter_args: '--presets env,flow',
    ignore_watch: [
      'src/client',
      'public',
    ],
    env: {
      NODE_PATH: '/',
      NODE_ENV: 'development',
    },
  }],
};
