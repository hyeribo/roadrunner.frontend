const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => ({
  mode: env.mode,
  entry: {
    vendor: ["react", "react-dom"],
    bundle: [path.resolve(__dirname, "src", "index.js")],
  },
  output: {
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    filename: "[name].[hash].js",
  },
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
    // open: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
      "@root": path.resolve("src"),
      "@assets": path.resolve("src/assets"),
      "@config": path.resolve("src/config"),
      "@atoms": path.resolve("src/components/atoms"),
      "@molecules": path.resolve("src/components/molecules"),
      "@organisms": path.resolve("src/components/organisms"),
      "@templates": path.resolve("src/components/templates"),
      "@pages": path.resolve("src/components/pages"),
      "@data": path.resolve("src/data"),
      "@modules": path.resolve("src/modules"),
      "@routes": path.resolve("src/routes"),
      "@styles": path.resolve("src/styles"),
      "@utils": path.resolve("src/utils"),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env.mode),
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./public/favicon.ico",
    }),
    new Dotenv(),
  ],
  devtool: env.mode === "development" ? "source-map" : "",
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         chunks: 'initial',
  //         test: 'vendor',
  //         name: 'vendor',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [["import", { libraryName: "antd", style: "css" }]],
          },
        },
        exclude: [/(node_modules|unitTest)/],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "img/[hash].[ext]",
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
});
