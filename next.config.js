const path = require("path");

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
    
        // Example using webpack option
        // config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));

        config.resolve = {
            alias: {
              Api: path.resolve(__dirname, "api"),
              Src: path.resolve(__dirname, "src"),
              components: path.resolve(__dirname, "src/components"),
              views: path.resolve(__dirname, "src/views"),
              styles: path.resolve(__dirname, "src/styles"),
              utils: path.resolve(__dirname, "src/utils"),
              shared: path.resolve(__dirname, "shared"),
              data: path.resolve(__dirname, "src/data"),
              fonts: path.resolve(__dirname, "src/fonts")
            }
          };

        return config;
      },
      webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
      }
}


