var path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,//正则表达式，匹配的路径
        use: ['./loaders/style-loader.js']
      }
    ]
  }
};
