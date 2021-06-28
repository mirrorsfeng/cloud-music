import * as actionTypes from "./constants";

import { getTopBanners } from "@/service/recommend";
import { getHotRecommend, getNewAlbums, getTopRanking } from "../../../../../service/recommend";

const changeTopBannerAction = (res) =>({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})

const changeHotRecommendsAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMENDS,
    hotRecommends: res.result
})

const changeNewAlbumsAction = (res) => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})

const changeImproveRankingAction = (res) => ({
    type: actionTypes.CHANGE_IMPOVE_RANKING,
    improveRanking: res.playlist
})

const changeNewSongsRankingAction = (res) => ({
    type: actionTypes.CHANGE_NEW_SONGS_RANKING,
    newSongsRanking: res.playlist
})

const changeCreatorRankingAction = (res) => ({
    type: actionTypes.CHANGE_CREATOR_RANKING,
    creatorRanking: res.playlist
})

export const getTopBannerAction = () =>{
    return dispatch =>{
        getTopBanners().then(res =>{
           dispatch(changeTopBannerAction(res));
        })
    }
}

export const getHotRecommendsAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            dispatch(changeHotRecommendsAction(res));
        })
    }
}

export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
           dispatch(changeNewAlbumsAction(res));
        })
    }
}

export const getTopRankingAction = (idx) => {
    return dispatch => {
        getTopRanking(idx).then(res => {
            switch (idx){
                case 0:
                dispatch(changeImproveRankingAction(res));
                break;
                case 2:
                    dispatch(changeNewSongsRankingAction(res));
                    break;
                case 3:
                    dispatch(changeCreatorRankingAction(res));
                    break;
                default:

            }
        })
    }
}