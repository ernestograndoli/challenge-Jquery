const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        pdp: './src/pdp/index.js',
        plp: './src/plp/index.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/].*\.js$/,
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/plp/index.html',
        chunks: ['plp', 'vendor']
    }),
    new HtmlWebpackPlugin({
        filename: 'pdp.html',
        template: './src/pdp/index.html',
        chunks: ['pdp', 'vendor']
    }),
    new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
    })],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        hot: true,
        open: true
    },
};