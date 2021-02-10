const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const fs = require('fs');

module.exports = {
  mode: 'development',
  output: {
    filename: 'js/[name].[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist'), //用于清除文件目录时，必写
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(png)|(jpg)|(gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:5].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 8000,
    open: true,
    proxy: {
      //代理规则
      '/api': {
        target: 'http://localhost:6008',
        changeOrigin: true, //更改请求头中的host和origin
      },
    },
  },
};
