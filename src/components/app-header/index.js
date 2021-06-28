import React, { memo } from 'react';


import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { HeaderLeft, HeaderRight, HeaderWrapper } from "./style"
import { headerLinks } from "@/common/local-data.js";

const RZAppHeader = memo(() => {
//页面其他逻辑代码

   //headerLinks
   const showSelectItem = (item,index) =>{
       if(index<3){
           return (
               <NavLink to={item.link} exact>
                   {item.title}
               <i className="sprite_01 icon"></i>
               </NavLink>
               
           )
       }
       else{
           return <a href={item.link}>{item.title}</a>
       }
   }



   //jsx
    return (
        <HeaderWrapper>
            <div className ="content wrap-v1" >
          <HeaderLeft>
              <a href="#/" className= "logo sprite_01">网易云音乐</a>
              <div className = "select-list">
                  {
                  headerLinks.map((item,index) => {
                      return (
                        <div key= {item.title} className="select-item">
                            {showSelectItem(item,index)}
                        </div>
                      )
                  })
                }
              </div>
          </HeaderLeft>
          <HeaderRight>
                <Input placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} className="search"/>
                <div className="center">创作者中心</div>
                <div className="login">登录</div>
          </HeaderRight>
            </div>
            <div className = "divider">

            </div>
        </HeaderWrapper>
    );
});

export default RZAppHeader;