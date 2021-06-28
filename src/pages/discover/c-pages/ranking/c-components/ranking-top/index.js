import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { RankingTopWrapper } from "./style";
import SongOperationBar from "@/components/SongOperation-bar";
import { formatMonthDay,getSizeImage } from "@/utils/format-utils.js";
const RankingTop = memo(() => {

//redux
   const { playList } = useSelector(state => ({
       playList: state.getIn(["ranking","playList"])
   }),shallowEqual)


    return (
        <RankingTopWrapper>
            <div className ="image">
                <img src={getSizeImage(playList.coverImgUrl,150)} alt=""/>
            </div>
            <div className ="content">
            <div className ="message">
            <h1>{playList.name}</h1>
            <div className ="time">
            <i className ="sprite_icon2 clock"></i>
            <div className ="update">最近更新: {formatMonthDay(playList.updateTime)}</div>
            </div>
            </div>
            <SongOperationBar favorTitle ={`(${playList.subscribedCount})`}
                                shareTitle={`(${playList.shareCount})`}
                                downloadTitle="下载"
                                commentTitle={`(${playList.commentCount})`}
                />
            </div>
        </RankingTopWrapper>
    );
});

export default RankingTop;