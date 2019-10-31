const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devtool: "cheap-source-map",
    module: {
        rules: [
            { test: /\.(png|jpe?g|gif|svg)$/i, loader: "file-loader" },
            { test: /\.css$/i, use: ['style-loader', 'css-loader'] },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}