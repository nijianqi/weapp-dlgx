//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    bannerList: [],
  },
  //首页轮播图
  onLoad:function(options){
  var that = this;
  wx.request({
  url: 'https://www.dlgx888.com/index.php/weapp',
  data: {},
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
   var data = res.data;
   that.setData({
        bannerList: data.bannerList
      })
  }
})
  }
})
