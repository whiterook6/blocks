"use strict";
let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: './client/Rhino/scripts/rhino.js',
		vendor: [
			'angular',
			'angular-animate',
			'angular-resource',
			'angular-route',
		]
	},
	output: {
		path: __dirname + '/public/assets/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css') },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css!sass') },
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query: { cacheDirectory: './node_modules/.cache', presets: ['es2015'] }
			},
			{ test: /\.html$/, loader: 'html?interpolate' },
			{ test: /\.(png|jpg|gif)$/, loader: 'file' }
		]
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.bundle.js'),
		new ExtractTextPlugin('bundle.css', { allChunks: true }),
	],
	watchOptions: {
		poll: 5000
	},
	test: {
		module: {
			loaders: [
				{
					test: /\.js$/,
					exclude: /(node_modules)/,
					loader: 'babel',
					query: { cacheDirectory: './node_modules/.cache', presets: ['es2015'] }
				},
				{ test: /\.html$/, loader: 'html?interpolate' }
			]
		}
	}
};
