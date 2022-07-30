const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
module.exports = {
	mode: "development",
	entry: path.resolve(__dirname, "src/index.js"),
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
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
