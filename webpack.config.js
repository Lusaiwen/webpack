const baseConfig = require('./webpack.base');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');


module.exports = function (env) {
  console.log(env);
  if(env && env.prod) {
    //生产环境
    var config = {
      ...baseConfig,
      ...prodConfig
    }
    config.plugins = [...baseConfig.plugins, ...prodConfig.plugins]
    return config;
  }
  else {
    //开发环境
    return {
      ...baseConfig,
      ...devConfig
    }
  }
}