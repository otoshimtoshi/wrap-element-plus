module.exports = {
  configureWebpack: {
    output: {
      filename: "js/index.js",
      chunkFilename: "js/chunk-vendors.js",
    },
  },
  css: {
    extract: {
      filename: "css/index.css",
    },
  },
};
