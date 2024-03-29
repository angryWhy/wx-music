// pages/details-songs/index.js
import {rankingStore} from "../../store/ranking-store"
import {getSongDetail} from "../../services/api-video"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        type:"",
        menuInfo:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const type = options.type
        console.log(type);
        this.setData({type})
        if(type === "menu"){
            const id = options.id
            getSongDetail(id).then(res=>{
                console.log("menu数据",res.data.playlist);
                this.setData({menuInfo:res.data.playlist})
            })
        }else if (type === "rank"){
            const rankingName = options.ranking
            rankingStore.onState(rankingName,this.getRankingHandler)
        }
        
    },
    getRankingHandler(res){
        this.setData({rankingInfo:res})
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