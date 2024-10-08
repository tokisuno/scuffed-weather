const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devtool: "inline-source-map",
    devServer: {
        static: "./dist",
        watchFiles: ["src/"]
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new HtmlWebpackPlugin({
            title: "Weather!",
            template: "./src/index.html",
        })
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    }
}
