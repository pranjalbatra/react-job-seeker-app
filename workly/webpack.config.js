var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    // entry: {
    //     index: [path.join(path.resolve(__dirname), '/src/main.js')]
    // },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                // look for .js or .jsx files
                test: /\.(js|jsx)$/,
                // in the `src` directory
                exclude: /(node_modules)/,
                use: {
                    // use babel for transpiling JavaScript files
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/react',
                            {
                                'plugins': ['@babel/plugin-proposal-class-properties']
                            }
                        ],
                    },
                },
            },
            {
                // look for .css or .scss files
                test: /\.(css|scss)$/,
                // in the `src` directory
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            discardDuplicates: true,
                            importLoaders: 1,
                            // This enables local scoped CSS based in CSS Modules spec
                            modules: true,
                            // generates a unique name for each class (e.g. app__app___2x3cr)
                            localIdentName: '[name]__[local]___[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    output: {
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true
    }
}