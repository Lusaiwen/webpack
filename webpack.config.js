var MyPlugin = require('./plugin/index');

module.exports = {
  mode: 'development',
  plugins: [new MyPlugin()],
};
