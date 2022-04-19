// app.js
App({
    onLaunch(){
       wx.getSystemInfoAsync({
         success: (result) => {
            this.globalData.screenWidth = result.screenWidth
            this.globalData.screenHeight = result.screenHeight
            this.globalData.statusBarHeight = result.statusBarHeight
         },
       })  
    },
    globalData:{
        screenWidth:0,
        screenHeight:0,
        statusBarHeight:44
    }
})
