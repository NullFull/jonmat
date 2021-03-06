var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


module.exports = {
	devtool: 'source-map',
	context: path.join(__dirname, 'src'),
	entry: {
		main: 'main'
	},
	output: {
		path: path.join(__dirname, 'static/build/'),
		filename: '[name].js',
		publicPath: 'https://nullfull.github.io/jonmat/static/'
	},
	plugins: [
		new BundleTracker(),
		new webpack.DefinePlugin({
			__CONFIG__: JSON.stringify('product')
		})
	],
	resolve: {
		extensions: ['', 'styl', '.jsx',  '.js'],
		modulesDirectories: ['node_modules', 'src']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			query: {
				presets: [
					['env', {
						'targets': {
							'browsers': ['last 3 versions', 'IE >= 10', '> 10% in KR']
						}
					}],
					'react'
				]
			},
			exclude: 'node_modules'
		}, {
			test: /\.json$/,
			loaders: ['json'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.styl$/,
			loaders: ['style', 'css', 'stylus'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.(png|jpg|svg)$/,
			loaders: ['file'],
			include: path.join(__dirname, 'src')
		}]
	}
};


// var path = require('path');
// var webpack = require('webpack');
// var BundleTracker = require('webpack-bundle-tracker');
//
//
// module.exports = {
//     devtool: 'source-map',
//     entry: {
//         main: [
//             'main'
//         ]
//     },
//     output: {
//         path: path.join(__dirname, 'static/build/'),
//         filename: '[name].js',
//         publicPath: 'https://nullfull.github.io/jonmat/static/'
//     },
//     plugins: [
//         new BundleTracker(),
//         new webpack.DefinePlugin({
//             __CONFIG__: JSON.stringify('product')
//         })
//     ],
//     resolve: {
//         extensions: ['', '.styl', '.jsx',  '.js'],
//         modulesDirectories: ['node_modules', 'src']
//     },
//     module: {
//         loaders: [{
//             test: /\.jsx?$/,
//             loaders: ['react-hot', 'babel'],
//             include: path.join(__dirname, 'src'),
//             exclude: 'node_modules'
//         }, {
//             test: /\.json$/,
//             loaders: ['json'],
//             include: path.join(__dirname, 'src')
//         }, {
//             test: /\.styl$/,
//             loaders: ['style', 'css', 'stylus?&paths[]=node_modules&paths[]=node_modules/jeet/stylus'],
//             include: path.join(__dirname, 'src')
//         }, {
//             test: /\.(png|jpg|svg)$/,
//             loaders: ['file'],
//             include: path.join(__dirname, 'src')
//         }]
//     }
// };
