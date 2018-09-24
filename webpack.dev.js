const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Congigure to render html
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html",
	//favicon: './src/favicon.ico',
	inject: true
});

const assetsDir = path.resolve(__dirname, 'src/app/assets');
const nodeModulesDir = path.resolve(__dirname, 'node_modules');
const indexFile = path.resolve(__dirname, 'src/app/index.js');

const SPLIT_STYLE = true;

const config = {
	devtool: '#source-map',//quality->original source, 
	entry: {
		main: [
			'babel-polyfill',
			indexFile
		]
	},
	output: {
		path: assetsDir,
		filename: 'bundle.js'
	},
	devServer: {
		historyApiFallback: true,
		port: 8085,
		contentBase: path.join(__dirname, "./dist"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: [nodeModulesDir],
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: SPLIT_STYLE
					? ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{
								loader: 'css-loader',
								options: {
									importLoaders: 1
								}
							},
						// 'postcss-preset-env',
						
						]
					})
					: [
						'style-loader',
						{ loader: 'css-loader', options: { importLoaders: 1 } },
						// 'postcss-preset-env'
					]
			},
			{
				test: /\.scss$/,
				use: SPLIT_STYLE
					? ExtractTextPlugin.extract(
						{
							fallback: 'style-loader',
							use: [
								{
									loader: 'css-loader',
									options: {
										importLoaders: 1
									}
								},
								// 'postcss-preset-env',
								'sass-loader'
							]
						}
					) :
					[
						'style-loader',
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1
							}
						},
						// 'postcss-preset-env',
						'sass-loader'
					]
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 100000,
							publicPath: '/public/assets/',
							name: '[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		getImplicitGlobals(),
		setNodeEnv(),
		htmlPlugin,
		new ExtractTextPlugin('[name].css'),
		// new config.optimization.splitChunks({
		//   name:     'vendor',
		//   filename: 'app.vendor.bundle.js'
		// })
	]
};
//Error: webpack.optimize.CommonsChunkPlugin has been removed, please use config.optimization.splitChunks instead.
/*
* here using hoisting so don't use `var NAME = function()...`
*/
function getImplicitGlobals() {
	return new webpack.ProvidePlugin({
		$: 'jquery',
		jQuery: 'jquery',
		jquery: 'jquery'
	});
}

function setNodeEnv() {
	return new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': JSON.stringify('dev')
		}
	});
}

module.exports = config;
