import { getSongDetail,getLyric } from "@/service/player";

import { getRandomNum } from "@/utils/math-utils";
import * as actionTypes from "./constants";
import { parseLyric } from "@/utils/parse-lyric";

const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
});

const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
});

const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
});

const changeLyricsListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

//对外暴露action
export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch,getState) => {
        const playList = getState().getIn(["player","playList"]);
        const sequence = getState().getIn(["player","sequence"]);
        let currentSongIndex = getState().getIn(["player","currentSongIndex"]);

        switch(sequence){
            case 1: //随机播放
            let randomIndex = getRandomNum(playList.length);
            while(randomIndex === currentSongIndex){
                randomIndex = getRandomNum(playList.length);
            }
            currentSongIndex = randomIndex;
            break;
            default: //顺序播放 
                currentSongIndex += tag;
                if(currentSongIndex >= playList.length) currentSongIndex = 0;
                if(currentSongIndex < 0) currentSongIndex = playList.length - 1;

        }

        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));

        //请求歌词
        dispatch(getLyricAction(currentSong.id));
    }
}

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const getSongDetailAction = (ids) => {
    return (dispatch,getstate) => {
        //根据ids判断playList是否有该歌曲
        const playList = getstate().getIn(["player","playList"]);
        const songIndex = playList.findIndex(song => song.id === ids);

        let song = null;
        
        if(songIndex !== -1){ //找到歌曲
            dispatch(changeCurrentSongAction(songIndex));
            song = playList[songIndex];
            dispatch(changeCurrentSongAction(song));
            dispatch(getLyricAction(song.id));
        }else{//没有找到
            getSongDetail(ids).then(res => {
                //处理防止取不到数据
                song = res.songs && res.songs[0];
                if(!song) return;
                //将歌曲放入播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);
                //更新redux中的值
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length-1));
                dispatch(changeCurrentSongAction(song));

                //请求歌词
                dispatch(getLyricAction(song.id));
            })
            
        }
        
            
    }
}

export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then( res => {
            const lyric = res.lrc.lyric;
            const lyricList = parseLyric(lyric);
            dispatch(changeLyricsListAction(lyricList));
        })
    }
}

export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    currentLyricIndex: index
})
