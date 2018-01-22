const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: [{
						loader: "style-loader"
				}, {
						loader: "css-loader"
				}, {
						loader: "sass-loader"
				}]
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: false,
		port: 8080,
		stats: 'errors-only',
		open: true,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({template: './src/index.html'}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()

	]
};

module.exports = config;
