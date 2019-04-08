const path = require('path');

/* const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); */
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	output: {
		filename: '[name].build.js',
		path: path.resolve(__dirname, 'dist')
	},
	// externals: [{
	// 	xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
	// }],
	plugins: [
		// new webpack.DefinePlugin({
		// 	'process.env.NODE_ENV': JSON.stringify('production')
		// }),
		new webpack.optimize.UglifyJsPlugin()
	]
});