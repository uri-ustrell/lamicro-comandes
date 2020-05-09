const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const envConfig = require("./env.config.json");

module.exports = {
	entry: "./src/js/index.js",
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "public"),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
					},
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, "public"),
		historyApiFallback: true,
		before: function (app, server, compiler) {
			app.get("/titles", function (req, res) {
				setTimeout(() => {
					res.json({ titles: envConfig.dev.titles });
				}, 2000);
			});
			process.env.API_URL = envConfig.dev.baseURL;
		},
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "index.html",
		}),
	],
};
