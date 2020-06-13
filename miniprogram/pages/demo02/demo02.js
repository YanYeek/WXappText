// pages/demo02/demo02.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"wsnbbbbbbb",
    path:"/images/MyImages/defaultHead.png",
    localPath:"请选择位置"
  },
  changeData: function(){
    // 获取数据 修改(错误)
    // this.data.message = "lol"

    // this.setData 修改数据并重载渲染
    this.setData({
      message:"lol"
    })
  },
  getLocalPath:function(){
    var that = this
    wx.chooseLocation({
      success: (res) => {
        // console.log(res)
        this.setData({
          localPath:res.address
        })
      },
    })
  },
  getUserName: function(){
    var that = this
    console.log('sdg')
    // 调用微信接口 获取当前信息
    wx.getUserInfo({
      success: function(res){
        // 调用成功后触发
        console.log(res)
        that.setData({
          name:res.userInfo.nickName,
          path:res.userInfo.avatarUrl,
        })
      },
      fail:function(res){
        // 调用失败后触发
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
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

  }
})