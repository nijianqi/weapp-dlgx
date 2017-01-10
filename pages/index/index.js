//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    bannerList: [], //首页轮播图
    activityOnlineList:[],
    activityLineList:[],
    videoList:[]
  },
  //首页
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
        bannerList: data.bannerList,
        activityOnlineList: data.activityOnlineList.slice(0, 4),
        activityLineList: data.activityLineList.slice(0, 3),
        videoList: data.videoList
      })
  }
})
  },
   showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
})
