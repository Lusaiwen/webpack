const path = require('path');

module.exports = {
  mode: 'development',
//   watch: true,
  module: {
    rules: [
      {
        test: /\.css$/, use: ['style-loader' , 'css-loader']
      },
      {
        test: /\.png$/, use: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    port: 8000
  }
}