var MyPlugin = require('./plugin/index');

module.exports = {
  mode: 'development',
  watch: true,
  plugins: [new MyPlugin()],
};
