module.exports = {
  plugins: {
    autoprefixer: {}
  },
  "postcss-px-to-viewport":{
    viewportWidth:375,  //视窗的宽度，对应的是我们设计稿的宽度  这里375 667 为iphone6的宽高
    viewportHeight:667, //视窗的高度，对应的是我们设计稿的高度
    unitPrecision:5,  //指定px转化为视窗单位值的小数位数（因为很多时候都不能整除）
    viewportUnit:'vw',  //指定需要转换成的视窗单位，建议使用vw
    selectorBlackList:['ignore','tab-bar'],  //指定不需要转换的类
    minPixelValue:1,  //小于或等于 1px 不进行转化
    mediaQuery:false,  //允许在媒体查询中转换px
    exclude:[/TabBar/], //指定不需要转换的文件，数组中必须为正则
  }
}
