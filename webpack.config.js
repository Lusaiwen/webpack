const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    //   watch: true,
      devtool: 'source-map',
    devServer: {
        open: true,
        port: 8000,
    },
    module: {
        rules: [
            {test: /.pcss$/, use: ['style-loader', 'css-loader?modules', 'postcss-loader']},
            // {test: /.less$/, use: ['style-loader', 'css-loader?modules', 'less-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
