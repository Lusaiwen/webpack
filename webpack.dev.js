//开发环境
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    port: 9000,
    open: true,
    openPage: 'list.html',
    proxy: {
      '/api': {
        target: 'http://yuanjin.tech:5100/',
        changeOrigin: true,
      },
    },
  },
};
