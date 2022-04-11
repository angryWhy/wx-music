import wzxRequest from "./index"
import wzRequest from "./index"
export function getMvUrl(id){
    return wzRequest.get("mv/url",{
        id
    })
}
export function getMvDetail(mvid){
    return wzRequest.get("/mvdetail",{
        mvid
    })
}
export function getRelatedVideo(id){
    return wzRequest.get("/related/allvideo",{
        id
    })
}
export function getRankingData(idx){
    return wzRequest.get("/top/list",{
        idx
    })
}
export function getSongMenu(cat="全部",limit = 6,offset=0){
    return wzxRequest.get("/top/playlist",{
        cat,
        limit,
        offset
    })
}