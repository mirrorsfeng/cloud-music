import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState =Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
    improveRanking: {},
    newSongsRanking: {},
    creatorRanking: {}
})


 function reducer(state = defaultState, action){
     switch(action.type){
         case actionTypes.CHANGE_TOP_BANNERS :
             return state.set("topBanners",action.topBanners);
        case actionTypes.CHANGE_HOT_RECOMMENDS :
            return state.set("hotRecommends",action.hotRecommends);
        case actionTypes.CHANGE_NEW_ALBUM :
            return state.set("newAlbums",action.newAlbums);
        case actionTypes.CHANGE_IMPOVE_RANKING :
            return state.set("improveRanking",action.improveRanking);
        case actionTypes.CHANGE_NEW_SONGS_RANKING :
            return state.set("newSongsRanking",action.newSongsRanking)
        case actionTypes.CHANGE_CREATOR_RANKING :
            return state.set("creatorRanking",action.creatorRanking);
        default:
            return state
     }
 }


 export default reducer;