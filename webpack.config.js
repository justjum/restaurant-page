const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './src/index.js',
        'page-load': './src/page-load.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html',
            inject: false
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: 'inline-source-map',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(tiff|woff|woff2)$/i,
                type: 'asset/resource',
            },
        ],
    },
    optimization: {
        minimize: false
        
    },
};
