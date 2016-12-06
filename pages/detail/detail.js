// 引入请求数据的服务
var listViewService = require('../../service/listViewService.js')

var app = getApp()
Page({
  data: {
    type:"",
    movieDetailData:[],
    isLoading:false
  },
  onLoad: function(options) {
    var _this=this;
    listViewService.getMovieDetailData(options.id,function(data){
        _this.setData({
          isLoading:true,
          movieDetailData: data
        })
    });
    
  },
  onReady: function() {
  },
  onShow: function() {
  },
  onHide: function() {
  },
  onUnload: function() {
  },
})
