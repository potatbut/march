const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const webpack = require('webpack');
/* const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; */
const CopyWebpackPlugin = require('copy-webpack-plugin');
var nodeExternals = require('webpack-node-externals');


module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
    },
    /* target: 'node',
    externals: [nodeExternals()], */
    devServer: {
        /* contentBase: __dirname + '/dist',
        compress: true, */
        port: 4200,
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
                ]
            },{
                test: /\.(png|jpg|gif|svg)$/i,
                exclude: [/node_modules/,/fonts/],
                use: ['file-loader', 
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        }
                    }
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
                exclude: [/node_modules/,/logo/],
                loader: 'url-loader',
                options: {
                    name: '[name].[ext]'
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: __dirname + "/src/index.pug",
            filename: './index.html',
        }),
        new webpack.ProvidePlugin ({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        /* new BundleAnalyzerPlugin() */
        new CopyWebpackPlugin ([
            {from: 'src/img', to: './img'},
        ]) 
    ],
    
}
