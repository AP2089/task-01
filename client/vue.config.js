const path = require('path');

module.exports = {
  outputDir: path.join(__dirname, '..', 'server', 'public'),
  devServer: {
    port: process.env.VUE_APP_CLIENT_PORT
  }
}