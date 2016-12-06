// 引入请求数据的服务
var listViewService = require('../../service/listViewService.js')

var app = getApp()
Page({
  data: {
    type:"",
    pageCount:10,
    pageIndex:1,
    movieListData:[],
    isLoading:false
  },
  onLoad: function(options) {
    console.log("3333333333333333333333333")
    var _this=this;
    listViewService.getMovieListData(options.type,this.data.pageIndex,this.data.pageCount,function(data){
        _this.setData({
          type:options.type,
          isLoading:true,
          movieListData: data.subjects/*从接口拿到的数据*/
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
  loadMoreData:function(){/*实现页面的多次加载*/
      this.setData({
          isLoading:false,
        })
      console.log("344444444444444444444444444")
      var _this=this;
      var index=this.data.pageIndex+1;
      listViewService.getMovieListData(this.data.type,index,this.data.pageCount,function(data){
          _this.setData({
            pageIndex:index,
            isLoading:true,
            movieListData: _this.data.movieListData.concat(data.subjects)
          })
      });
  }
})
