import wzxRequest from "../../services/index"
import rankingStore from "../../store/ranking-store"
import {
  getSongMenu
} from "../../services/api-video"
import {
  debounce
} from "../../utils/debounce"
import {
  queryRect
} from "../../utils/queryRect"
const thr = debounce(queryRect, 2000)
// pages/home-music/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: 0,
    recommend: [],
    songMenu: [],
    songMenuRecommend: [],
    ranking: [{0:{},2:{},3:{}}]
  },
  handleRanking(idx) {
    return (res) => {
      const name = res.name
      const coverImgUrl = res.coverImgUrl
      const playCount = res.playCount
      const songlist = res.tracks?.slice(0, 3)
      const rankingObj = {
        name,
        coverImgUrl,
        songlist
      }
      const newRankings = {...this.data.ranking,[idx]:rankingObj}
      this.setData({
        ranking: newRankings
      })
    }
  },
  handleSearch() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },
  handleImageLoading() {
    queryRect(".swiper-image").then(res => {
      const rect = res[0]
      this.setData({
        height: rect.height
      })
    })
  },
  /** 
   * 生命周期函数--监听页面加 
   */
  onLoad: function (options) {
    rankingStore.dispatch("getRankingataAction")
    rankingStore.onState("hotRanking", (res) => {


      if (!res.tracks) return
      const recommend = res.tracks.slice(0, 6)
      this.setData({
        recommend: recommend
      })
    })
    // rankingStore.onState("newRanking", res => {
    //   const name = res.name
    //   const coverImgUrl = res.coverImgUrl
    //   const songlist = res.tracks?.slice(0, 3)
    //   const rankingObj = {
    //     name,
    //     coverImgUrl,
    //     songlist
    //   }
    //   const newRankings = [...this.data.ranking]
    //   newRankings.push(rankingObj)
    //   this.setData({
    //     ranking: newRankings
    //   })
    // })
    rankingStore.onState("newRanking", this.handleRanking(0))
    rankingStore.onState("originRanking", this.handleRanking(2))
    rankingStore.onState("upRanking", this.handleRanking(3))

    wzxRequest.get("/banner", {
      type: 2
    }).then(
      res => {
        this.setData({
          banners: res.data.banners
        })
      }
    )
    getSongMenu().then(res => {
      this.setData({
        songMenu: res.data.playlists
      })
    })
    getSongMenu("华语").then(
      res => {
        this.setData({
          songMenuRecommend: res.data.playlists
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