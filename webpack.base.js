//公共配置
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    list: './src/list/index.js',
    detail: './src/detail/index.js',
  },
  output: {
    filename: 'js/[name].[chunkhash:5].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/list.html',
      filename: 'list.html',
      chunks: ['list'],
      hash: true,
    }),
    new HtmlWebpackPlugin({
      template: './public/detail.html',
      filename: 'detail.html',
      chunks: ['detail'],
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './public',
          to: './',
          filter: async (resourcePath) => {
            if (/\.html$/.test(resourcePath)) {
              return false;
            }
            return true;
          },
        },
      ],
    }),
  ],
  stats: {
    modules: false,
    colors: true,
  },
};
