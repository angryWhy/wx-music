// app.js
App({
    onLaunch(){
       wx.getSystemInfoAsync({
         success: (result) => {
           console.log(result);
            this.globalData.screenWidth = result.screenWidth
            this.globalData.screenHeight = result.screenHeight
            this.globalData.statusBarHeight = result.statusBarHeight
         },
       })  
    },
    globalData:{
        screenWidth:0,
        screenHeight:0,
        statusBarHeight:44,
        navBarheight:44
    } 
})
