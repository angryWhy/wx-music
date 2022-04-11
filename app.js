// app.js
App({
    onLaunch(){
       wx.getSystemInfoAsync({
         success: (result) => {
            this.globalData.screenWidth = result.screenWidth
            this.globalData.screenHeight = result.screenHeight
         },
       })  
    },
    globalData:{
        screenWidth:0,
        screenHeight:0
    }
})
