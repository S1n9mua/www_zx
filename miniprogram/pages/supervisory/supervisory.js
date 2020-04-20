// miniprogram/pages/supervisory/supervisory.js
const db = wx.cloud.database();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //添加数据
    //this.adddemo();
    //获取数据
    // this.getdemo();

    // 日期格式转化为空？？原因未知
    // const $ = db.command.aggregate
    // db.collection("device_info").aggregate()
    //   .project({
    //       _id: 0,
    //       formatDate: $.dateToString({
    //       date: '$date',
    //       format: '%Y-%m-%d'
    //     })
    //   })
    //   .end().then(res =>{
    //     console.log(res);
    //   })

    var that = this;
    db.collection("device_info").get().then(res => {
      var devices = res.data;
      that.setData({
        devices: devices
      });
      console.log(devices);
    })
  },

  // adddemo:function(){
  //   db.collection("device_info").add({
  //     data:{
  //       _id:"dv_four",
  //       dv_name:"水下呼吸机",
  //       cycle_time:30,
  //       dv_type:"水域救援工具",
  //       dv_num:"B-1314-52",
  //       manage:"张小喵",
  //       reparie_date: Date("2020-02-25"),
  //       in_date: Date("2020-01-25")
  //     }
  //   })
  // },

  // getdemo:function(){
    // db.collection("device_info").get().then(res => {
    //   var devices = res.data;
    //   console.log(devices);
  //   })
  // },


  getScancode: function () {
    var _this = this;
    // 允许从相机和相册扫码
    wx.scanCode({
      scanType: ['qrCode'],
      success: (res) => {
        var result = res.result;
        _this.setData({
          result: result,
        })
      }
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