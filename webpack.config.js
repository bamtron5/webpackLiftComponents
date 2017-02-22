var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./client/app/app.module.ts"
  },
  output: {
    path: __dirname + "/client/dist",
    filename: "bundle.js"
  }
};
