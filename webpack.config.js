var path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /index\.js$/,//正则表达式，匹配的路径
        use: ['./loaders/loader1.js', './loaders/loader2.js']
      }, //规则一
      {
        test: /\.js$/,
        use: ['./loaders/loader3.js', './loaders/loader4.js']
      }
    ]
  }
};
