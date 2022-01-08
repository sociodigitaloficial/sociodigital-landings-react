const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
    },
    mode: 'development',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@images': path.resolve(__dirname, 'src/assets/images/'),
            '@videos': path.resolve(__dirname, 'src/assets/videos/'),
            '@fonts': path.resolve(__dirname, 'src/assets/fonts/'),
            '@data': path.resolve(__dirname, 'src/data/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@context': path.resolve(__dirname, 'src/context/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@router': path.resolve(__dirname, 'src/router/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(png|jpg|ico|mp4)$/,
                type: 'asset',
                generator: {
                    filename : 'assets/images/[name].[contenthash][ext]',
                  }
            },
            {
                test: /\.mp4$/,
                type: 'asset',
                generator: {
                    filename : 'assets/videos/[name].[contenthash][ext]',
                  }
            },
            {
                test: /\.(woff|woff2)$/,
                type: "asset/resource",
                generator: {
                    filename : 'assets/fonts/[name].[contenthash][ext]',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: './[name].[contenthash].css'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: "assets"
                }
            ]
        }),
        new Dotenv(),
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        compress: true,
        port: 3000,
        open: true
    }
}