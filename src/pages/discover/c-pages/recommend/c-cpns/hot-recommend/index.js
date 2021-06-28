import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch,useSelector } from "react-redux";

import ThemeHeader from "@/components/theme-header-recommend";
import { HotRecommendWrapper } from "./style";
import { getHotRecommendsAction } from '../../store/actionCreators';
import SongsCover from "@/components/songs-cover";

import { HOT_RECOMMENDS_LIMIT } from '../../../../../../common/constants';

const HotRecommend = memo(() => {
//state

//redux hooks

    const { hotRecommends } = useSelector(state => ({
        hotRecommends: state.getIn(["recommend","hotRecommends"])
    }),shallowEqual) 
    const dispatch = useDispatch();

    //other hooks
     useEffect(() => {
        dispatch(getHotRecommendsAction(HOT_RECOMMENDS_LIMIT))
     },[dispatch])
    return (
        <HotRecommendWrapper>
            <ThemeHeader title = "热门推荐" keywords = {["华语","流行","摇滚","民谣","电子"]}/>
            <div className = "hotitems">
            {
                hotRecommends.map((item,index) => {
                    return (
                        <SongsCover key ={item.id} info = {item}/>
                    )
                })
            }
            </div>
        </HotRecommendWrapper>
    );
});



export default HotRecommend;