'use strict'
var isDev = process.env.NODE_ENV === 'dev';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app",
    output: {
        path: __dirname,
        filename: "build.js",
        library: "home"
     },
     watch:true,
     watchOptions:{
         aggregateTimeout:100
     },
     devtool: "source-map",
     plugins:[
        new webpack.EnvironmentPlugin([
            "NODE_ENV"
          ]),
         new HtmlWebpackPlugin({ title: 'Webpack App' })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //         drop_console: true
        //     }
        // })
     ]
     ,
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    
    devServer:{
        host:'localhost',
        port:8080
    }
};