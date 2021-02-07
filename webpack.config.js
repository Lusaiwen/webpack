var path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(jpg)|(png)|(gif)$/,
        use: ['./loaders/img-loader.js']
      }
    ]
  }
};
