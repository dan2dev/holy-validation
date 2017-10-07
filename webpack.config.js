const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

var pkg  = require('./package.json'); 
var entry = {};
entry[pkg.name] = "./src/main.ts";

const config = {
	entry: entry,
	output: {
		filename: './dist/[name].js'
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ["awesome-typescript-loader"]
			},
			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
		]
	},
	plugins: [
		new LiveReloadPlugin({})
	]
}


module.exports = config;