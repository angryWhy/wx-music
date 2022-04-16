import wzxRequest from "./index";

export function getSearchHot(params) {
    return  wzxRequest.get("/search/hot")
}
export function getSearchSuggest(keywords){
    return wzxRequest.get("/search/suggest",{
        keywords,
        type:"mobile"

    })
}
export function getSearchResult (keywords) {
    return wzxRequest.get("/search",{keywords})
}