module.exports = {
  configureWebpack: {
    externals: {
      puppeteer: 'require("puppeteer")',
    },
  },
  "transpileDependencies": [
    "vuetify"
  ],
  publicPath: '/Troya-PWA-Live/'
}