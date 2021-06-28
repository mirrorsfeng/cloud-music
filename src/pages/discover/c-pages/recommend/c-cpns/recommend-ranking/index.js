import React, { memo, useEffect } from 'react';

import ThemeHeader from "@/components/theme-header-recommend";
import { RecommendRankingWrapper } from "./style";
import TopRanking from "@/components/top-ranking";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopRankingAction } from '../../store/actionCreators';

const RecommendRanking = memo(() => {

    const { improveRanking,newSongsRanking,creatorRanking } = useSelector(state => ({
        improveRanking: state.getIn(["recommend","improveRanking"]),
        newSongsRanking: state.getIn(["recommend","newSongsRanking"]),
        creatorRanking: state.getIn(["recommend","creatorRanking"])
    }),shallowEqual)

//redux hooks
    const dispatch = useDispatch();

    //other hooks
    useEffect(() => {
      dispatch(getTopRankingAction(0));
      dispatch(getTopRankingAction(2));
      dispatch(getTopRankingAction(3));
    },[dispatch])

    return (
        <RecommendRankingWrapper>
            <ThemeHeader title = "榜单"/>
            <div className = "content">
            <TopRanking info={improveRanking}/>
            <TopRanking info={newSongsRanking}/>
            <TopRanking info={creatorRanking}/>
            </div>
        </RecommendRankingWrapper>
    );
});

export default RecommendRanking;