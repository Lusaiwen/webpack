const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.config.js");
const path = require('path')

// webpack的开发环境配置，从基本配置中合并
// 合并是利用 webpack-merge 完成的： https://github.com/survivejs/webpack-merge
const devConfig = {
  mode: "development",
  devtool: "source-map",
  output: {
    filename: "js/[name].[contenthash:5].js", // js 输出到 dist/js/xxx
    publicPath: "/", // 公用的公共路径 /
    path: path.resolve(__dirname, "dist"), // 输出目录为 dist
  },
  devServer: {
    open: true,
    port: 8000,
    compress: true,
    contentBase: path.join(__dirname, 'dist'),
    proxy: {
      // 如果开发环境中有跨域问题，在这里配置代理
    },
    stats: "minimal",
  }
};
module.exports = merge(baseConfig, devConfig);
