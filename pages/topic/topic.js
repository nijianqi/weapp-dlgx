//topic.js
//获取应用实例
var app = getApp()
Page({
  data: {

  },
  //话题列表
  onLoad:function(options){
  var that = this;
  wx.request({
  url: 'https://www.dlgx888.com/index/topic/newtoplist.html', 
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
