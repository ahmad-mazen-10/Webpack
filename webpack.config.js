const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean:true,
    },
    devtool:'source-map',
    devServer: {
        static: {
            directory:path.resolve(__dirname,'dist' )
        }, 
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback:true,
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'scss-loader']
        },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    present:['@babel/present-env'],
                },
            },
        ],
        // plugin: [
        //     new HTMLWebpackPlugin({
        //         template: './src/template.html'
        //     })
        // ]
    }
};