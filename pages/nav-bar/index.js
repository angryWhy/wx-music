// pages/nav-bar/index.js
Component({
    /**
     * 组件的属性列表
     */
    options:{
        multipleSlots:true,
    },
    properties: {
        title:{
            type:String,
            value:"默认标题"
        }
    },

    /**
     * 组件的初始数据
     */
    data: { 
        statusBarHeight :getApp().globalData.statusBarHeight,
        navBarHeight :getApp().globalData.navBarHeight
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes:{
        // ready(){
        //     wx.getSystemInfo({
        //       success: (result) => {},
        //     })
        // }
    }
})
