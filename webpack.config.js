const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'jquery-extends.js',
        minifyFilename: 'jquery-extends.min.js',
        sourceMapFilename: 'jquery-extends.js.map',
        libraryTarget: 'umd',
        library: 'jQuery'
        //umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime']
                } 
            }
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
            window: __dirname + '/src/vars/window',
            document: __dirname + '/src/vars/document',
            $: __dirname + '/src/vars/jquery',
            jQuery: __dirname + '/src/vars/jquery'
        })
    ]
};
