const AutoImport = require('unplugin-auto-import/webpack')
const AutoComponents = require('unplugin-vue-components/webpack')
const { VantResolver, } = require('unplugin-vue-components/resolvers')
const AutoIcons = require('unplugin-icons/webpack')
const { FileSystemIconLoader, } = require('unplugin-icons/loaders')
const IconsResolver = require('unplugin-icons/resolver')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        api: '@/api',
        consts: '@/assets/consts',
        css: '@/assets/css',
        icons: '@/assets/icons',
        images: '@/assets/images',
        medias: '@/assets/medias',
        components: '@/components',
        config: '@/config',
        utils: '@/utils',
      },
    },
    plugins: [
      AutoImport({
        include: [
          /\.[tj]sx?$/,
          /\.vue$/, /\.vue\?vue/,
          /\.md$/
        ],
        imports: [
          'vue',
          'vue-router',
          'vuex'
        ],
        dts: false,
        eslintrc: {
          // 需要更新.eslintrc-auto-import.为true
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
        dirs: [
          './src/utils'
        ],
      }),
      AutoComponents({
        // relative paths to the directory to search for components.
        dirs: [ 'src/components' ],
        // valid file extensions for components.
        extensions: [ 'vue' ],
        // search for subdirectories
        deep: true,
        // resolvers for custom components
        resolvers: [
          VantResolver(),
          IconsResolver({
            prefix: false,
            customCollections: [
              'my-icons'
            ],
          })
        ],
        dts: false,
      }),
      AutoIcons({
        compiler: 'vue2',
        scale: 1,
        defaultClass: 'icons',
        customCollections: {
          'my-icons': FileSystemIconLoader(
            './src/assets/icons',
            svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
        },
      })
    ],

  },
}
