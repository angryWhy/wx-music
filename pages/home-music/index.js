import wzxRequest from "../../services/index"

// pages/home-music/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleSearch() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },
  handleImageLoading() {
    console.log("图片加载完成");
    const query = wx.createSelectorQuery()
    query.select(".swiper-image").boundingClientRect()
    query.exec( (res) =>{
      const re = res[0]
      this.setData({height:re.height})
    })
  },
  /** 
   * 生命周期函数--监听页面加 
   */
  onLoad: function (options) {
    wzxRequest.get("/banner", {
      type: 2
    }).then(
      res => {
        console.log(res.data.banners);
        this.setData({
          banners: res.data.banners
        })
      }
    )
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