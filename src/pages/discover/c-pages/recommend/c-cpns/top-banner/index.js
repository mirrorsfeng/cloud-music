import React, { memo,useEffect,useRef,useCallback, useState  } from 'react';
import { useSelector,useDispatch,shallowEqual } from "react-redux";

import { Carousel } from 'antd';
import { getTopBannerAction } from "../../store/actionCreators";
import { 
    TopBannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
 } from "./style";

const TopBanner = memo(() => {
//state
    const [currentIndex,setCurrentIndex] = useState(0);

    //redux相关
    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }),shallowEqual)
    const dispatch = useDispatch();
  //  const { getBanners,topBanners } = props;
    useEffect(() =>{
        dispatch(getTopBannerAction());
    },[dispatch])
    
    //  其他hooks
    const Bannerref = useRef();
    const bgchange = useCallback((from,to) => {
        setCurrentIndex(to);
    },[])

    //其他业务逻辑
    const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl+"?imageView&blur=40x20")

    return (
        <TopBannerWrapper bgImage ={bgImage}>
            <div className = "banner">
        <BannerLeft>
        <Carousel effect="fade" autoplay ref={Bannerref} beforeChange ={bgchange} >
            {
                topBanners.map((item,index) => {
                    return (
                        <div className = "banner-item" key ={item.imageUrl}>
                            <img src={item.imageUrl} alt={item.typeTitle} className ="image"/>
                        </div>
                    )
                })
            }
        </Carousel>
        </BannerLeft>
        <BannerRight>
        </BannerRight>
        <BannerControl>
            <button className = "left btn" onClick = {e => Bannerref.current.prev()}/>
            <button className = "right btn" onClick = {e => Bannerref.current.next()} />
        </BannerControl>
            </div>
        </TopBannerWrapper>
    );
});

export default TopBanner;