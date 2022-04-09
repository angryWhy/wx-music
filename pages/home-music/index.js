import wzxRequest from "../../services/index"
import rankingStore from "../../store/ranking-store"
import {
  debounce
} from "../../utils/debounce"
import {
  queryRect
} from "../../utils/queryRect"
const thr = debounce(queryRect,2000)
// pages/home-music/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0
  },
  handleSearch() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },
  handleImageLoading() {
     queryRect(".swiper-image").then(res=>{
       const rect = res[0]
       console.log(111);
       this.setData({height:rect.height})
     })
  },
  /** 
   * 生命周期函数--监听页面加 
   */
  onLoad: function (options) {
    rankingStore.dispatch("getRankingataAction")
    rankingStore.onState("hotRanking",(res)=>{
      if(!res.tracks) return
      const recommend = res.tracks.slice(0,6)
      console.log(recommend);

    })  



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