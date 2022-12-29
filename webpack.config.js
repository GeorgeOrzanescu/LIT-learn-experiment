const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");


const dev = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/main.ts",
    name: "dev",
    output: {
        path: path.join(__dirname, "dist/"),
        filename: "js/main.js"
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    devServer: {
        static: path.join(__dirname, "dist/"),
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "src/index.html"
        })
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: "ts-loader"
        }]
    }
}

module.exports = [dev];