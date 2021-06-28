import { getTopList,
         getRankingList
        } from "@/service/ranking";

import * as actionTypes from "./constants";

const changeTopListAction = (res) => ({
    type: actionTypes.CHANGE_TOP_LIST,
    topList: res.list
})


const changePlayListAction = (res) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList: res.playlist
})

export const changeCurrentIdAction = (id) => ({
    type:actionTypes.CHANGE_CURRENT_ID,
    currentId: id
})

export const getTop = () => {
   return dispatch => {
       getTopList().then(res => {
           dispatch(changeTopListAction(res));
       })
   }
}

export const getPlayList = (id) => {
    return dispatch => {
        getRankingList(id).then(res => {
            dispatch(changePlayListAction(res));
        })
    }
}