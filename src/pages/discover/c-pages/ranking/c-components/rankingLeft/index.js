import React, { memo, useCallback } from 'react';

import { RankingLeftCpWrapper } from "./style";
import { getSizeImage } from "@/utils/format-utils";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeCurrentIdAction } from '../../store/actionCreators';

const RankingLeft = memo((props) => {

    const { Url,name,update,stand } = props;

    //redux
    const dispatch = useDispatch();
    const { currentId } = useSelector(state =>({
        currentId: state.getIn(["ranking","currentId"])
    }),shallowEqual)

    const changeCurrentId = useCallback((stand) => {
        dispatch(changeCurrentIdAction(stand));
    },[dispatch])


    return (
        <RankingLeftCpWrapper stand={stand} currentId ={currentId} onClick = {e => changeCurrentId(stand)}>

            <div className = "image">
                <img src={getSizeImage(Url,40)} alt=""/>
            </div>
            <div className = "content">
                <span className ="name">{name}</span>
                <span className ="update">{update}</span>
            </div>
        </RankingLeftCpWrapper>
    );
});

export default RankingLeft;