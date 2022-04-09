import {HYEventStore} from "hy-event-store"
import {getRankingData} from "../services/api-video"
const rankingStore = new HYEventStore({
    state:{
        hotRanking:{}
    },
    actions:{
        getRankingataAction(ctx){
            getRankingData(1).then(
                res=>{
                    console.log(res.data.playlist);
                    ctx.hotRanking = res.data.playlist
                }
            )
        }
    }
})
export default rankingStore