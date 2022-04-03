import wzxRequest from "../../services/index"

// pages/detail-video/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function (options) {
        const id = options.id
        wzxRequest.get("/mv/url",{id}).then(res=>{
            this.setData({url:res.data.data.url})
        })
        wzxRequest.get("/mv/detail",{mvid:id}).then(res=>{
            console.log(res.data.data);
            this.setData({mvDetail:res.data.data})
        })
        wzxRequest.get("/related/allvideo",{id}).then(res=>{
            console.log(res.data.data);
            this.setData({relatedVideo:res.data.data})
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