var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js', //属性名： chunk的名称， 属性值： 入口模块
    a: ['./src/a.js', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'target'), //必须是一个绝对路径
    filename: '[name][hash:5].js' //配置的合并的js文件的规则
  },
};
