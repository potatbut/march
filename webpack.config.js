const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const webpack = require('webpack');
/* const CopyPlugin = require('copy-webpack-plugin') */


module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: "babel-loader" 
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    /* 'resolve-url-loader', */
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.pug$/,
                use: [
                    'pug-loader',
                ]
            },
            {
                test: /\.(woff(2)?|ttf|otf|eot|svg)$/,
                /* exclude: /node_modules/, */
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: __dirname + "/src/index.pug",
            //inject: 'body'
            filename: './index.html',
        }),
        new webpack.ProvidePlugin ({
            $: 'jquery',
            jQuery: 'jquery'
        }),/* 
        new CopyPlugin ([
            {from: 'src/fonts', to: 'dist/fonts'},
        ]) */
    ],
    devServer: {
        contentBase: '/src/public',
        port: 7700,
    }
    
}
