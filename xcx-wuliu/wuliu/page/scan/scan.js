Page({
  data: {

  },

  onLoad() {
    
  },

  onReady() {
    console.log("onReady")
  },
  scanInfo(){
    //调用扫码
    var that = this
    wx.scanCode({
      success: function (res) {
        wx.showToast({
          title: '扫码成功',
        });
        //扫码内容
        var content = res.result;
        console.log(content)
        wx.navigateTo({
          url: '/page/uploadLocation/uploadLocation?orderId=' + content,
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '扫码失败',
        });
      }
    })
  }

})