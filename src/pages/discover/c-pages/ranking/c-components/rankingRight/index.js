import React, { memo } from 'react';

import RankingListHeader from "@/components/ranking-list-header";

import { RankingRightWrapper} from "./style";
import { shallowEqual, useSelector } from 'react-redux';

import { getSizeImage,formatMinuteSecond } from "@/utils/format-utils";

const RankingRight = memo(() => {

    //redux

    const { playList } = useSelector(state => ({
        playList: state.getIn(["ranking","playList"])
    }),shallowEqual)
    const tracks = playList.tracks || [];

    return (
        <RankingRightWrapper>
         <RankingListHeader songNum = {playList.trackCount} playNum ={playList.playCount}/>
        <div className ="play-list">
        <table>
            <thead>
                <tr>
                    <th className ="ranking"></th>
                    <th className ="title">标题</th>
                    <th className ="duration">时长</th>
                    <th className ="singer">歌手</th>
                </tr>
            </thead>
            <tbody>
                {
                    tracks.map((item,index) => {
                        let name2;
                        if(item.ar[1]){
                            name2 ="|"+item.ar[1].name; 
                        }else{
                           name2 ="";
                        }
                        return (
                            <tr key ={index}>
                                <td>
                                    <div className ="rank-num">
                                    <span>{index +1}</span>
                                    <i className ="new sprite_icon2"></i>
                                    </div>
                                </td>
                                <td>
                                    <div className ="song-name">
                                    <img src={getSizeImage(item.al.picUrl,50)} alt=""/>
                                    <i className ="play sprite_table"></i>
                                    <span className ="name">{item.name}</span>
                                    </div>
                                </td>
                                <td>{formatMinuteSecond(item.dt)}</td>
                                <td>{item.ar[0].name + name2}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>

        </RankingRightWrapper>
    );
});

export default RankingRight;