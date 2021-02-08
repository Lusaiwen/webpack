var path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: './index.js',
    a: './a.js'
  },
  output: {
    library: 'abc'
  },
  context: path.resolve(__dirname, 'src'),
  resolve: {
    modules: ['node_modules'],  //模块查找的位置
    extensions: ['.js', 'json'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  externals: {
    jquery: '$'  
  }
};
