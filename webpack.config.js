const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Purgecss = require('purgecss-webpack-plugin');
const globAll = require('glob-all');
const srcAbs = path.resolve(__dirname, 'src'); //得到src的绝对路径
const htmlPath = path.resolve(__dirname, 'public/index.html');
const paths = globAll.sync([`${srcAbs}**/*.js`, htmlPath]);

module.exports = {
    // mode: 'production',
    mode: 'production',
    output: {
        filename: '[name].[chunkhash:5].js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new CleanWebpackPlugin(),
    ],

    stats: {
        colors: true,
        chunks: false,
        modules: false,
    },
};
