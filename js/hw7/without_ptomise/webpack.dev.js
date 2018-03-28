const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
	output: {
		filename: '[name].build.js',
		path: path.resolve(__dirname, 'dist')
	},
	externals: [{
		xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
	}],
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	]
});