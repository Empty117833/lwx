// listView页面服务 获取后台的数据
module.exports={
    // 获取电影列表数据的方法
    getMovieListData:function(type,pageIndex,pageCount,cb){

        var index=(pageIndex-1)*pageCount+1;
         console.log("555555555555555555555");
        console.log(pageIndex);
        console.log(pageCount);
        var url="https://api.douban.com/v2/movie/"+type+"?start="+index+"&count="+pageCount;
        wx.request({
            url: url,
            data: {
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                cb(res.data);
            }
            })
    },
    // 获取电影列表详细数据的方法
    getMovieDetailData:function(id,cb){
         var url="https://api.douban.com/v2/movie/subject/"+id;
        wx.request({
            url: url,
            data: {
            },
            header: {
                'Content-Type': 'application/json'
            },
            success: function(res) {
                cb(res.data);
            }
            })
    }
}