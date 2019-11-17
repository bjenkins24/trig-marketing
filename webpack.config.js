const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = env => {
    const { NODE_ENV } = env;

    return {
        mode: NODE_ENV,
        entry: "./src/index.js",
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            compress: true,
            port: 2021 
        },
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist/assets")
        },
        devtool: NODE_ENV === "development" ? "eval-source-map" : false,
        optimization: {
            minimizer: [
                new TerserJSPlugin({}),
                new OptimizeCSSAssetsPlugin({})
            ],
            // Make all css extract into one file
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: "styles",
                        test: /\.css$/,
                        chunks: "all",
                        enforce: true
                    }
                }
            }
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css",
                path: path.resolve(__dirname, "dist/assets"),
                chunkFilename: "[id].css",
                ignoreOrder: false // Enable to remove warnings about conflicting order
            })
        ],
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                hmr: NODE_ENV === "development"
                            }
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "less-loader"
                        }
                    ]
                },
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                }
            ]
        }
    };
};
