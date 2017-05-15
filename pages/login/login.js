// pages/my/my.js
Page({
  data:{
    qq:null,
    pw:null,
    code:null}
  ,
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  qqinput:function(e){
    this.setData({qq:e.detail.value})
  },
  pwinput:function(e){
    this.setData({pw:e.detail.value})
  },
  login:function(){
    var that;
    that=this;
    wx.request({
  url: 'https://zhangdetalk.com/class/login.php', 
  method:'POST',
  data: {
     qq:this.data.qq ,
     pw:this.data.pw
  },
  header:{
    "content-type":"application/x-www-form-urlencoded"
  },
  success: function(res) {
    console.log(res.data)
    that.setData({code:res.data.code})
  }
 })
 if(that.data.code==2)
    wx.showToast({
      title: '用户名或密码不正确'
    })
 if(that.data.code==0)
    wx.navigateTo({
      url: '/pages/my/my?id=1',
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
 })