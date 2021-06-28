import React,{ memo } from "react";

import { SettleSCoverWrapper } from "./style";

const SettleSingerCover = memo((props) => {

   const {name,born,url} = props; 
    return (
        <SettleSCoverWrapper url ={url}>
            <a href="/todo">
                <img className="img" src={url} alt=""/>
                <div className ="context">
                <p className ="name">{name}</p>
                <p className ="born text-nowrap">{born}</p>
                </div>
            </a>
        </SettleSCoverWrapper>
    )
})


export default SettleSingerCover;