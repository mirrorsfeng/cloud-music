import React, { memo } from 'react';

import { RankingWrapper } from "./style";

const RankingListHeader = memo((props) => {


    const { songNum, playNum} = props;
    return (
        <RankingWrapper>
            <div className ="song-num">
                <h2>歌曲列表</h2>
                <span>{songNum + "首歌"}</span>
            </div>
            <div className ="play-num">
            <span className ="play">播放:</span>
            <span className ="num">{playNum}</span>
            <span className ="la">次</span>
            </div>
        </RankingWrapper>
    );
});

export default RankingListHeader;