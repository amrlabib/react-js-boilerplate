const path = require('path')

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CompressionPlugin = require("compression-webpack-plugin")



module.exports = {
    performance: {
      hints: false
    },
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'js/scripts.js',
        chunkFilename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                presets: ['env', 'es2015', 'react', 'stage-1', 'flow'],
                "env": {
                  "development": {
                    "plugins": ["flow-react-proptypes"]
                  }
                }
            }
        },{
            test: /\.scss$/,
            exclude: /(style.css|global.scss|node_modules)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '"[name]-[local]-[hash:base64:6]"',
                            minimize: true
                        }
                    },
                    'sass-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]"',
                    'postcss-loader'
                ]
            })
        }, {
            test: /\.scss$/,
            include: /(style.css|global.scss|node_modules)/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
            })
        }, {
          test: /\.svg$/,
          use: [
            { loader: 'svg-sprite-loader',
                options: {
                    extract:true,
                    spriteFilename: '/sprite.svg',
                }
            },
            {
                loader: 'svgo-loader',
            }
          ]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    name: '/images/[name].[ext]',
                    fallback: 'file-loader'
                }
              }
            ]
          }
          ]
    },
    plugins: [
        new UglifyJSPlugin(),
        new CopyWebpackPlugin([
            { from: './index.html', to: './' },
        ]),
        new ExtractTextPlugin({
            filename: '/styles/style.css',
            allChunks: true
        }),
        new SpriteLoaderPlugin(),
        new CompressionPlugin({
          test: /\.js/m,
        }),
    ],
}
