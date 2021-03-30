module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: "cache-loader",
              options:{
                cacheDirectory: "./cache"
              }
            },
            // "thread-loader",//开启多线程
            "babel-loader"
          ]
        }
      ]
    }
  };
  