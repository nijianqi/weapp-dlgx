//topic.js
//获取应用实例
var app = getApp()
Page({
  data: {
      list:[]
  },
  //话题列表
  onLoad:function(options){
  var that = this;
  wx.request({
  url: 'https://www.dlgx888.com/weapp/topic/newtoplist.html', 
  data: {offset:6},
  header: {
      'content-type': 'application/json'
  },
  success: function(res) {
       var data = res.data;
   that.setData({
       lists: data.lists,
      })
  }
})
  }
})
