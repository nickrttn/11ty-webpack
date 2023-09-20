const path = require('node:path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    entry: {
        client: ['webpack-hot-middleware/client', './client.js']
    },
    output: {
        publicPath: '/',
        path: path.resolve('.', '_site')
    }
}