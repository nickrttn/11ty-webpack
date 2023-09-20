const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpack = require("webpack");

module.exports = function(eleventyConfig) {
    const compiler = webpack(require("./webpack.config.js"));

    eleventyConfig.setServerOptions({
        middleware: [
            webpackDevMiddleware(compiler, {
                publicPath: "/",
            }),
            webpackHotMiddleware(compiler)
        ]
    })
}