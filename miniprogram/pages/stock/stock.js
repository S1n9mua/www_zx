// pages/stock/stock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: "",
    age: 0,
    gender: "",
    tempImages:[]
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initImageSize();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  // form 表单提交云数据库

  // getForm: function (e) {
  //   var formdata = e.detail.value;
  //   this.setData({
  //     "data.username": formdata.username,
  //     "data.age": formdata.age,
  //     "data.gender": formdata.gender
  //   })
  //   console.log("更新data", e)
  // },

  // getData: function (e) {
  //   var getdata = this.data;
  //   const db = wx.cloud.database();
  //   db.collection("user_info").add({
  //     data: {
  //       username: getdata.data.username,
  //       age: getdata.data.age,
  //       gender: getdata.data.gender
  //     }
  //   }).then(res => {
  //     console.log("提交成功", res)
  //   }).catch(res => {
  //     console.log("提交失败", res)
  //   })
  // },

  initImageSize:function(){
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const containerWidth = windowWidth - 30;
    const imageSize = (containerWidth - 7.5)/3;
    this.setData({
      imageSize:imageSize
    })
  },

  onAddImageTap:function(event){
    const that = this;
    wx.chooseImage({
      success: function(res) {
        const tempImages = res.tempFilePaths;
        const oldImages = that.data.tempImages;
        const newImages = oldImages.concat(tempImages);
        that.setData({
          tempImages: newImages
        })
      },
    })
  },
  onRemoveBtnTap:function(event){
    const index = event.target.dataset.index;
    const tempImages = this.data.tempImages;
    //splice数组中删除元素
    tempImages.splice(index,1);
    this.setData({
      tempImages: tempImages
    })
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