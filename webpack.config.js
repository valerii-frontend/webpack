const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.[contenthash].js",
		clean: true,
	},
	devtool: "source-map",
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 5050,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},

	plugins: [new htmlPlugin({ title: "valerii webpack", filename: "index.html", template: "src/template.html" })],
};
