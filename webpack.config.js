const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, options) =>
{
    return {
        mode: options.mode,
        entry: {
            app: [
                "./src/Logger.ts"
            ]
        },
        output: {
            filename: "js/my-awesome-library.js",
            path: path.resolve(__dirname, "dist"),
            library: "MyAwesomeLibrary",
            libraryTarget: "var"
        },
        resolve: { extensions: [".ts", ".tsx", ".js", ".jsx", ".json"] },
        node: {
            __dirname: false,
            __filename: false,
            fs: "empty"
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: "awesome-typescript-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: path.resolve(__dirname, "./src/", "index.html"),
                minify: true,
                filename: "./index.html",
                inject: false
            }),
        ]
    }
};