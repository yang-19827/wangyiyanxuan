const path = require('path')
const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 37.5   
})
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports={
  lintOnSave:false,
  devServer:{
    open:true,
      proxy:{
        '/3002': {
            target: 'http://localhost:3002',
            changeOrigin: true,
            pathRewrite:{
                "^/3002":""
            }
        }
    }
  },
  configureWebpack:{
    resolve: {
      alias: {
          'components': resolve('src/components'),
          'pages': resolve('src/pages'),
          'store': resolve('src/store'),
          'ajax': resolve('src/ajax'),
          'router':resolve('src/router'),

      }
  }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
}