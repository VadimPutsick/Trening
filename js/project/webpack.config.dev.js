'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: './src/app.js',
    entry: './src/app.js',
    output: {      
        filename: "build.js",
        // path: path.resolve(__dirname, 'dist'),
        library: "home"
    }, 
    externals:[{
        xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }]
      ,  
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
    ,
    module: {  
        loaders: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/],
                loader: "babel-loader",
                query: {
                    presets: ['es2015', 'react', 'stage-0', 'stage-1']
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "eslint-loader",
            //     options: {
            //       // eslint options (if necessary)
            //     }
            // }
        ]
    },
    devServer: {
        // host: 'localhost',
        // contentBase: './dist',
        //   hot: true       
        // port: 8080
    }
};