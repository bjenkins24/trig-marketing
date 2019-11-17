const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = env => {
    return {
        mode: env.NODE_ENV,
        entry: "./src/index.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist/assets")
        },
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
                                hmr: process.env.NODE_ENV === "development"
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
