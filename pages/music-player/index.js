import {
    getSongDetail
} from "../../services/api-player"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        currentSong: [],
        currentPage: 0,
        conetntHeight: 0,
        duration:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const id = options.id
        this.setData({
            id
        })
        this.getPageData(id)
        console.log(getApp().globalData);
        const screenHeight = getApp().globalData.screenHeight
        const statusBarHeight = getApp().globalData.statusBarHeight
        const navBarHeight = getApp().globalData.navBarheight
        const conetntHeight = screenHeight - statusBarHeight - navBarHeight
        console.log(conetntHeight);
        this.setData({
            conetntHeight
        }) 
        //播放器
        const audioContext = wx.createInnerAudioContext() 
        audioContext.src = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
        audioContext.autoplay = true
    }, 
    getPageData(id) {
        getSongDetail(id).then(
            res => {
                this.setData({
                    currentSong: res.data.songs[0],
                    duration:res.data.songs[0].dt
                })
            }
        )
    },
    handleSwiperChange(event) {
        const current = event.detail.current
        this.setData({
            currentPage: current
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