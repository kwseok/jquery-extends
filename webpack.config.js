const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'jquery-extends.js',
        minifyFilename: 'jquery-extends.min.js',
        sourceMapFilename: 'jquery-extends.js.map',
        libraryTarget: 'umd',
        library: 'jQuery'
    },
    module: {
        loaders: [
            {test: /.js$/, loader: 'babel-loader'}
            //{test: /\.coffee$/, loader: 'coffee-loader'}
        ]
    },
    externals: {
        jquery: {
            root: "jQuery",
            commonjs: "jquery",
            commonjs2: "jquery",
            amd: "jquery"
        }
    },
    devtool: '#inline-source-map',
    plugins: [
        new webpack.ProvidePlugin({
            window: './vars/window',
            document: './vars/document'
        })
    ]
};
