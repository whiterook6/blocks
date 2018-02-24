"use strict";
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
	entry: {
		app: './resources/scripts/main.js',
		vendor: [
			'angular',
			'angular-animate',
			'angular-resource',
			'angular-route'
		]
	},
	output: {
		path: __dirname + '/public/assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css')
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css!sass')
		}, {
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel',
			query: { cacheDirectory: './node_modules/.cache', presets: ['es2015'] }
		}, {
			test: /\.html$/,
			loader: 'html?interpolate'
		}, {
			test: /\.(png|jpg|gif)$/,
			loader: 'file'
		}]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
		new ExtractTextPlugin('bundle.css', {
			allChunks: true
		}),
		// new OptimizeCssAssetsPlugin({
		// 	assetNameRegExp: /\.css$/g,
		// 	cssProcessor: require('cssnano'),
		// 	cssProcessorOptions: {
		// 		discardComments: {
		// 			removeAll: true 
		// 		}
		// 	},
		// 	canPrint: true
		// })
	],
	watchOptions: {
		poll: 5000
	}
};
