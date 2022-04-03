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