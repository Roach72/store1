var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin= require("mini-css-extract-plugin")
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
  entry:  {
    app:'./src/index.js'
  },
  
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js"
  },
  
  mode: "development",


  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 9000,
    devMiddleware: {
      writeToDisk: true,
    },
    hot: false, //تساعد في التحديث التلقائي
    liveReload: true,//تساعد في التحديث التلقائي
    open: true,// لفتح المشروع مباشرة بعد تنفيذ الأمر
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../' 
                }
              },
              'css-loader',
              'sass-loader'
            ]
      },


      {

        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          exposes: ['$', 'jQuery'],
        }
      },


    ]

  },

  plugins: [
    new HtmlWebpackPlugin({ 
      filename: "index.html",
      template: "./src/index.html",
    }),

    new HtmlWebpackPlugin({ 
      filename: "product.html",
      template: "./src/product.html",
    }),

    new HtmlWebpackPlugin({ 
      filename: "checkout.html",
      template: "./src/checkout.html",
    }),

    new HtmlWebpackPlugin({ 
      filename: "payment.html",
      template: "./src/payment.html",
    }),

    new HtmlWebpackPlugin({ 
      filename: "search.html",
      template: "./src/search.html",
    }),

    new HtmlWebpackPlugin({ 
      filename: "contact.html",
      template: "./src/contact.html",
    }),
    
    new MiniCssExtractPlugin({ filename: "css/index.css"}),

    new OptimizeCSSAssetsPlugin({}),

  ],

};