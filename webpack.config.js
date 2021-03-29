const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    //   watch: true,
    devtool: 'source-map',
    entry: {
        main: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: 'js/[name].[chunkhash:5].js',
        publicPath: '/' 
    },
    devServer: {
        open: true,
        port: 8000,
    },
    module: {
        rules: [
            {test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader?modules']},
            {test: /\.png$/, use: {
                loader: 'file-loader',
                options: {
                    name: 'img/[hash:5].[ext]'
                }
            }}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            chunks: ['main']
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:5].css'
        }),
    ],
};
