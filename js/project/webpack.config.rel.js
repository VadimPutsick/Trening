
const webpack = require('webpack');


const modRel = (
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
            drop_console: true
        }
    })

);

module.exports = {
    entry: "./src/app",
    output: {
        path: __dirname,
        filename: "build.js",
        library: "home"
    },
    watch:  false ,
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: "null",
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true
            }
        })
    
    ]
    ,
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },

   
};