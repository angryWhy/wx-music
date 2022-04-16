import { getSearchHot,getSearchResult,getSearchSuggest } from "../../services/api-search"

// pages/detail-search/index.js
Page({

    /**
     * 页面的初始数据
     */  
    data: {
        hotKeywords:[],
        suggestSongs:[],
        searchValue:"",
        suggestNodeValue:[],
        resultSongs:[],
        keyword:""

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getPageData()
    },
    getPageData(){
        getSearchHot().then(res=>{
            this.setData({hotKeywords:res.data.result.hots})
        })
    },
    handleSearchAction(){
        const searchValue = this.data.searchValue
        getSearchResult(searchValue).then(res=>{
            console.log(res.data.result.songs);
            this.setData({resultSongs:res.data.result.songs})
        })
    },
    handleSearchChange(e){
        const resultValue = e.detail
        this.setData({searchValue:resultValue})
        if(!resultValue.length) {
            this.setData({suggestSongs:[]})
            this.setData({resultSongs:[]})
            return
        }
        getSearchSuggest(resultValue).then(res=>{
            const suggestSongs = res.data.result.allMatch
             this.setData({suggestSongs})
            const suggestKeywords = suggestSongs.map(item=>{
                return item.keyword
            })
            const suggestNodeValue = []
            for( let key of suggestKeywords){
                const nodes = []
                if(key.startsWith(resultValue)){
                    const key1 = key.slice(0,resultValue.length)
                    const node1 = {
                        name:"span",
                        attrs:{
                            style:"color: red;"
                        },
                        children:[{type:"text",text:key1}]
                    }
                    nodes.push(node1)
                    const key2 = key.slice(resultValue.length)
                    const node2 = {
                        name:"span",
                        attrs:{
                            style:"color:#000000;"
                        },
                        children:[{type:"text",text:key2}]
                    }
                    nodes.push(node2)
                }else{
                    const node = {
                        name:"span",
                        attrs:{style:"color:#000000;"},
                        children:[{type:"text",text:key}]
                }
                nodes.push(node)
            }
            suggestNodeValue.push(nodes)
        }
            
            this.setData({suggestNodeValue:suggestNodeValue})
        })
    },
    handleSuggestItemClick(event){
        const index = event.currentTarget.dataset.index
        const keyword = this.data.suggestSongs[index].keyword
        console.log( this.data.suggestSongs[index]);
        this.setData({searchValue:keyword})


    },
    handleTagItemClick(event){
        const keyword = event.currentTarget.dataset.item
        this.setData({searchValue:keyword})
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