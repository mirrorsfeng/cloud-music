import React, { memo } from 'react';

import { LoginWrapper } from "./style";

const Login = memo(() => {
    return (
        <LoginWrapper>
           <div className ="content">
               <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
               </div> 
           <div className ="login">
               <a className="btn" href ="/todo">用户登录</a>
               </div> 
        </LoginWrapper>
    );
});

export default Login;