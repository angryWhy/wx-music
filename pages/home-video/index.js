// pages/home-video/index.js
import wzxRequest from "../../services/index"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topMv:[],
        hasMore:true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    handleVidoeItemClick(event){
        //获取id
        const id = event.currentTarget.dataset.item.id
        console.log(event.currentTarget.dataset.item.id);
        //页面跳转
        wx.navigateTo({
          url: '/pages/detail-video/index?id='+id,
        })
    },
    onLoad: function (options) {
        wzxRequest.get("/top/mv",{offset:0,limit:10}).then(
            res=>{
                this.setData({
                    topMv:res.data.data
                })
                wx.hideNavigationBarLoading()
            }
        )
    },
    onPullDownRefresh(){
        // wx.showNavigationBarLoading()
        wzxRequest.get("/top/mv",{offset:0,limit:10}).then(
            res=>{
                wx.hideNavigationBarLoading()
                this.setData({
                    topMv:res.data.data
                })
               
            }
        ) 
    },
    onReachBottom:function(){
        if(!this.data.hasMore&&offset!==0) return
        // wx.showNavigationBarLoading()
        wzxRequest.get("/top/mv",{offset:this.data.topMv.length,limit:10}).then(
            res=>{
                this.setData({
                    topMv:this.data.topMv.concat(res.data.data)
                })
                this.setData({
                    hasMore:res.data.hasMore
                })
                wx.hideNavigationBarLoading()
            }
        )
    }
})