import React, { memo,useEffect } from 'react';

import { useDispatch,useSelector,shallowEqual } from "react-redux";
import { RankingLeftWrapper,
         RankingWrapper,
         RankingRightWrapper
        } from "./style";

import RankingLeft from "./c-components/rankingLeft";
import { getTop,getPlayList } from "./store/actionCreators";
import RankingTop from "./c-components/ranking-top";
import RankingRight from "./c-components/rankingRight";

const RZranking = memo(() => {

      //redux
      const dispatch = useDispatch();
    
      useEffect(() => {
          dispatch(getTop());
      },[dispatch])

      const { topList,currentId } = useSelector(state => ({
        topList: state.getIn(["ranking","topList"]),
        currentId: state.getIn(["ranking","currentId"])
    }),shallowEqual)

    useEffect(() => {
        dispatch(getPlayList(currentId));
      },[dispatch,currentId])


    //other handle
  
    return (
        <RankingWrapper>
           <RankingLeftWrapper>
               <div className = "firstRk">
                   <h2>云音乐特色榜</h2>
                  {
                      topList.slice(0,4).map((item,index) => {
                          return(
                        <RankingLeft 
                        key = {item.id} 
                        Url = {item.coverImgUrl} 
                        name ={item.name} 
                        update ={item.updateFrequency}
                        stand = {item.id}/>
                          )
                      })
                  }
               </div>
               <div className ="secondRk">
                   <h2>全球媒体榜</h2>
                   {
                      topList.slice(4,topList.length).map((item,index) => {
                          return(
                        <RankingLeft 
                        key = {item.id} 
                        Url = {item.coverImgUrl} 
                        name ={item.name} 
                        update ={item.updateFrequency}
                        stand = {item.id} />
                          )
                      })
                  }
               </div>
           </RankingLeftWrapper>
           <RankingRightWrapper>
               <RankingTop/>
               <RankingRight/>
           </RankingRightWrapper>
        </RankingWrapper>
    );
});

export default RZranking;