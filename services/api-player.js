import wzxRequest from "./index";

export function getSongDetail (ids){
    return wzxRequest.get("/song/detail",{
        ids
    })
}