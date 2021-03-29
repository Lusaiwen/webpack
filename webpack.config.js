const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    //   watch: true,
    output: {
        filename: 'index.js'
    },
    devServer: {
        open: true,
        port: 8000,
    },
    module: {
        rules: [
            // {test: /.css$/, use: ['style-loader', 'css-loader']},
            {test: /.less$/, use: ['style-loader', 'css-loader?modules', 'less-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
