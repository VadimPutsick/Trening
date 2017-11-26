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
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react', 'stage-2']
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