// pages/home-video/index.js
import wzxRequest from "../../services/index"
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
        console.log(111);
        wzxRequest.get("/top/mv",{offset:0,limit:10}).then(
            res=>{
                console.log(res);
                this.setData({
                    
                    topMv:res.data.data
                })
            }
        )
    }
})