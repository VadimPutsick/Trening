const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		app: './src/app.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: 'public/index.html'
		})
	],
	module: {
		rules: [
			{
				test: /.css$/,
				use: [
					'style-loader',
					'css-loader'
					
				]
			},
			{
				test: /.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				]
			}
			/*,
			{
				enforce: 'pre',
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options:{
					fix: true
				}
			}*/
		]
	}
};