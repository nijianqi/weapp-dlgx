//topic.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  //首页轮播图
  onLoad:function(options){
  var that = this;
  wx.request({
  url: './index.php', //仅为示例，并非真实的接口地址
  data: {},
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
    console.log(res.data)
  }
})
  }
})
