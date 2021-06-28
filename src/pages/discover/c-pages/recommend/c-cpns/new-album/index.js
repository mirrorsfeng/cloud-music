import React, { memo, useEffect,useRef } from 'react';

import { getNewAlbumsAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import ThemeHeader from "@/components/theme-header-recommend";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NewAlbumWrapper } from "./style";
import AlbumCover from "@/components/album-cover";

const NewAlbum = memo(() => {
//redux hooks
    const { newAlbums } = useSelector(state => ({
        newAlbums: state.getIn(["recommend","newAlbums"])
    }),shallowEqual)

    const dispatch = useDispatch();

//other hooks
    const arrowref = useRef();

    useEffect(() => {
        dispatch(getNewAlbumsAction(10));
    },[dispatch])

    return (
        <NewAlbumWrapper>
            <ThemeHeader title = "新碟上架"/>
          <div className = "content">
              <button className = "arrow arrow-left sprite_02" onClick = { e => arrowref.current.prev()}></button>
              <div className = "album">
                  <Carousel ref = {arrowref} dots = {false}>
                      {
                          [0,1].map((item) => {
                              return (
                                  <div key = {item} className = "page">{
                                    newAlbums.slice(item*5,(item+1)*5).map(iten => {
                                        return (
                                            <AlbumCover key = {iten.name} info={iten} size={100} width={118} bgp="-570px"/>
                                        )
                                    })
                                  }</div>
                              )
                          })
                      }
                  </Carousel>
              </div>
              <button className = "arrow arrow-right sprite_02" onClick = { e => arrowref.current.next()}></button>
          </div>
        </NewAlbumWrapper>
    );
});

export default NewAlbum;