import React, { memo } from 'react';

import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction } from "@/pages/player/store";

import { TopRankingWrapper } from "./style";
import { useDispatch } from 'react-redux';

const TopRanking = memo((props) => {
//props and state
    const { info } = props;
    const { tracks = [] } = info;
//redux hoonks
   const dispatch = useDispatch();

//other handle

  const playMusic = (item) => {
      dispatch(getSongDetailAction(item.id));
  }

    return (
        <TopRankingWrapper>
            <div className ="header">
                <div className = "image">
                <img src={getSizeImage(info.coverImgUrl)} alt=""/>
                <a href="/todo" className = "image_cover">aaa</a>
                </div>
                <div className ="header-info">
                <a href="/todo" className = "title">{info.name}</a>
                <div className = "anchour">
                    <button className="btn play sprite_02"></button>
                    <button className="btn add sprite_02"></button>
                </div>
                </div>
            </div>
            <div className ="info">
                {
                    tracks.slice(0,10).map((item,index) => {
                        return (
                            <div key = {index} className ="item">
                                <div className ="word">{index+1}</div>
                                <div className ="content-info">
                                <span className ="song-name text-nowrap">{item.name}</span>
                                <div className ="operate">
                                    <button className ="btn play sprite_02" onClick = {e => playMusic(item)}></button>
                                    <button className ="btn add sprite_icon2"></button>
                                    <button className ="btn sprite_02 favor"></button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className ="footer">
                <a href="/todo">查看全部 &gt;</a>
                
            </div>
        </TopRankingWrapper>
    );
});

export default TopRanking;