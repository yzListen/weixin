var order = ['1', '2', '3', '4', '1']
Page({
  data: {
    imgUrls: [
      '../../images/banner-1.jpg',
      '../../images/banner-2.jpg'
    ],
    classlist1:null,
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 500
  },
   onLoad:function(options)
 {

    var that = this;
    var contentdata = wx.request({
      url: 'https://zhangdetalk.com/class/index.php', //仅为示例，并非真实的接口地址
      header: {
          'content-type': 'application/json'
      },
      success: function(res) {
        console.log(res)
        that.setData({
          classlist1: res.data.list
        })
      }
    });
  }
  
 
  

})
