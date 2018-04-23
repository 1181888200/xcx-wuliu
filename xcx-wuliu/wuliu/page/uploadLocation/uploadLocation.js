// page/uploadLocation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    systemInfo: {},
    systemInfoStr: '',
    location: '',
    systemLocation: '',
    orderId:'',
    hasLocation:false,
 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var orderId = options.orderId
    console.log("获取到订单ID ", orderId)
    this.setData({ orderId})
    this.getSystemInfo();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getSystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log("设备信息", res)
        that.setData({
          systemInfo: res,
          // systemInfoStr: JSON.stringify(res)
        })
    
      }
    })
  },
  chooseLocation: function () {
    //选择地图
    this.autoGetLocation();

    var that = this
    wx.chooseLocation({
      success: function (res) {
        //系统自动获取

        console.log("用户选择地址", res)

        that.setData({
          location: res.longitude + "," + res.latitude,
          locationAddress: res.address,
          hasLocation:true
        })
      }
    })
  },
  autoGetLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log("系统选择地址", res)
        that.setData({
          systemLocation: res.longitude + "," + res.latitude
        })
      }
    })
  },
  uploadData:function(){
    //上传数据

    wx.showModal({
      title: '提示',
      content: '上传成功',
      showCancel:false,
      success:function(res){
        wx.switchTab({
          url: '/page/scan/scan'
        })
      }
    })
   
  },
})