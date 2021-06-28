import React, { memo } from 'react';

import { AppDiscoverWrapper,TopMenu } from "./style";
import {discoverMenu} from "@/common/local-data.js";
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { renderRoutes } from 'react-router-config';



const RZDiscover = memo((props) => {
   

    const {route} = props;

    return (
        <AppDiscoverWrapper>
            <div className = "top">
                <TopMenu className="wrap-v1 topmenu">
            {
                discoverMenu.map((item,index)=>{
                    return (
                        <div key={item.title} className="item">
                            <NavLink to = {item.link}>{item.title}</NavLink>
                        </div>
                    )
                })
            }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </AppDiscoverWrapper>
    );
});

export default RZDiscover;