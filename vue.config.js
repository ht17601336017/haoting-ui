const path = require('path')
module.exports = {
  lintOnSave:false,
  pages:{
    index:{
      // 修改项目入口文件
      entry:'examples/main.js',
      template:'public/index.html',
      filename:'index.html'
    }
  },
  // 扩展webpack配置,使packages加入编译对所有的js使用 babel处理
  chainWebpack: config => {
    config.module
    .rule('js')
    .include.add(path.resolve(__dirname,'packages')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
      return options
    })
  }
}