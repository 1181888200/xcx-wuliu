 
Page({
  data: {
    result: '',
    systemInfo: {},
    systemInfoStr:'',

    hasLocation:false,
    location:'',
    systemLocation:'',

    userInfo: {},
  },
  scanCode: function () {
    var that = this
    wx.scanCode({
      success: function (res) {
          wx.showToast({
            title: '扫码成功',
          });

        that.setData({
          result: res.result
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '扫码失败',
        });
      }
    })
  },
  getSystemInfo: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        console.log("设备信息", res)
        that.setData({
          systemInfo: res,
          systemInfoStr: JSON.stringify(res)
        })
        // that.update()
      }
    })
  },
  onLoad(){
    //获取设备信息
    this.getSystemInfo();
    
    //获取用户信息
    this.getUserInfo();

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
          hasLocation: true,
          location: res.longitude + "," + res.latitude,
          locationAddress: res.address
        })
      }
    })
  },
  clear: function () {
    this.setData({
      hasLocation: false
    })
  },
  autoGetLocation: function () {
    var that = this
    wx.getLocation({
      success: function (res) {
        console.log("系统选择地址", res)
        that.setData({
          systemLocation: res.longitude+","+ res.latitude
        })
      }
    })
  },

  getUserInfo: function () {
    var that = this
    
    console.log("当前的userInfo: ", this.data.userInfo)

    if (that.data.userInfo) {
      _getUserInfo()
    }

    function _getUserInfo() {
      wx.login({
          success:function(data){
            console.log("当前的data值：", data) ;
            wx.getUserInfo({
              success: function (res) {
                console.log("用户当前的res值：", res)
                that.setData({
                  hasUserInfo: true,
                  userInfo: res.userInfo
                })

              }
            })
          }
      })
    }
  },

})
