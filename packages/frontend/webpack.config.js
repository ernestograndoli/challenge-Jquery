const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        pdp: './src/pdp/index.js',
        plp: './src/plp/index.js',
    },
    // output: {
    //     path: path.resolve(__dirname, 'dist'),
    //     filename: 'bundle.js',
    // },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/plp/index.html',
        chunks: ['plp']
    }),
    new HtmlWebpackPlugin({
        filename: 'pdp.html',
        template: './src/pdp/index.html',
        chunks: ['pdp']
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