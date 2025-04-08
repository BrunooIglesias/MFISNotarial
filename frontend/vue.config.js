const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    proxy: {
      '^/contact_messages': {
        target: process.env.VUE_APP_API_URL || 'http://localhost:3000',
        changeOrigin: true
      }
    }
  },
  transpileDependencies: [
    'quasar'
  ],

  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] },
          exclude: /node_modules/
        }
      ]
    }
  },

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  css: {
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
});
