//app.js
App({
  onLaunch: function () {
    console.log("app.js里面的onLaunch方法");
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())/*实现移除最久的一个用户信息*/
    wx.setStorageSync('logs', logs)/*存储最新的信息*/
  },
  onShow: function () {
    console.log("app.js里面的onShow方法");
  },
  onHide: function () {
    console.log("app.js里面的onHide方法");
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})