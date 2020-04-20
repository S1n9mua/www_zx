// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //从数据库中获取数据
    const db = wx.cloud.database();
    var that = this;
    db.collection("device_info").get().then(res => {
      var devices = res.data;
      that.setData({
        devices: devices
      });
      console.log(devices);
    })
  },

  //搜索事件
  onSearchInputEvent: function (event) {
    console.log(event);
  },

  /** 
  onSearchInputEvent:function(event){
    var that = this;
    var value = event.detail.value;
    network.getSearch({
      q:value,
      success:function(subjects){
        that.setData({
          subjects:subjects
        })
      }
    })
  },
  */

  //跳转详情页面
  onItemTapEvent:function(event){
    wx.navigateTo({
      url:'',
    })
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