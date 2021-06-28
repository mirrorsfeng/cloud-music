import React, { memo } from 'react';


import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";
import RecommendRanking from "./c-cpns/recommend-ranking";
import TopBanner from "./c-cpns/top-banner";
import HotDjradio from "./c-cpns/hot-djradio";
import Login from "./c-cpns/login";
import SettleSinger from "./c-cpns/settle-singer";
import { 
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
 } from "./style";

const RZrecommend = (props) => {
    
   
    return (
        <RecommendWrapper>
           <TopBanner/>
           <Content>
            <RecommendLeft>
                <HotRecommend/>   
                <NewAlbum/>
                <RecommendRanking/>
            </RecommendLeft>
            <RecommendRight>
                <Login/>
                <SettleSinger/>
                <HotDjradio/>
            </RecommendRight>
           </Content>
        </RecommendWrapper>
    );
};

/*const mapstatetoProps = state => ({
    topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch =>({
    getBanners: () =>{
        dispatch(getTopBannerAction());
    }
})
*/
export default memo(RZrecommend);