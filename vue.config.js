module.exports = {
  configureWebpack: {
    resolve: {
      alias: { // 路径别名
        api: '@/api',
        consts: '@/assets/consts',
        css: '@/assets/css',
        icons: '@/assets/icons',
        images: '@/assets/images',
        medias: '@/assets/medias',
        components: '@/components',
        config: '@/config',
        utils: '@/utils'
      }
    }

  }
}
