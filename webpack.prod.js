const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        'hello-world': './src/hello-world.js',
        'kiwi': './src/kiwi.js'
    },

    mode: 'production',

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|jpeg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        publicPath: 'images/'
                    }
                }
            }
        ]
    },

    output: {
        filename: '[name].[contenthash].js'
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '_'
        }
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new OptimizeCssAssetsWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'Hello World',
            meta: {
                description: 'Hello World Button Project',
                author: 'Sreekanth'
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            chunks: ['kiwi'],
            title: 'Kiwi',
            meta: {
                description: 'Kiwi Image Project',
                author: 'Sreekanth'
            }
        })
    ]

}