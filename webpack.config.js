const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


module.exports = {
    // mode: 'production',
    mode: 'production',
    output: {
        filename: '[name].[hash:5].js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        // 是否要启用压缩，默认情况下，生产环境会自动开启
        // minimize: true,
        minimizer: [
            // 压缩时使用的插件，可以有多个
            new TerserPlugin(),
            new OptimizeCSSAssetsPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:5].css',
            chunkFilename: 'common.[hash:5].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            // chunks: ['page1']
        }),
    ],

    stats: {
        colors: true,
        chunks: false,
        modules: false,
    },
};
