const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: './src/index.js',
        other: './src/other.js',
    },
    output: {
        filename: '[name][hash:5].js',
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/*'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./dll/jquery.manifest.json'),
        }),
        new webpack.DllReferencePlugin({
            manifest: require('./dll/lodash.manifest.json'),
        }),
    ],
};
