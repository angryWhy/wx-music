import {
    HYEventStore
} from "hy-event-store"
import {
    getRankingData
} from "../services/api-video"
const rankingMap = {0:"newRanking",1:"hotRanking",2:"originRanking",3:"upRanking"}
const rankingStore = new HYEventStore({
    state: {
        hotRanking: {},
        upRanking: {},
        originRanking: {},
        newRanking: {}
    },
    actions: { 
        getRankingataAction(ctx) {
            for (let i = 0; i < 4; i++) {
                getRankingData(i).then(
                    res => {
                        switch (i) {
                            case 0:
                                ctx.newRanking = res.data.playlist
                                break;
                            case 1:
                                ctx.hotRanking = res.data.playlist
                                break;
                            case 2:
                                ctx.originRanking = res.data.playlist
                                break;
                            case 3:
                                ctx.upRanking = res.data.playlist
                                break;
                        }
                    }
                )
            }
        }
    }
})
export {rankingStore,rankingMap}