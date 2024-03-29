// pages/song-menu/index.js
const app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        songMenu:{
            type:Array,
            value:[]
        },
        title:{
            type:String,
            value:""
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        screenWidth:app.globalData.screenWidth
    },
   

    /**
     * 组件的方法列表
     */
    methods: {
        handleMenuClick(event){
            const item = event.currentTarget.dataset.item
            wx.navigateTo({
              url: `/pages/details-songs/index?id=${item.id}&type=menu`,
            })
        },
    }
})
