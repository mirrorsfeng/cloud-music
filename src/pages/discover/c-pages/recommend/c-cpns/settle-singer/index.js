import React, { memo } from 'react';

import { SettleSingerWrapper } from "./style";

import SettleSingerCover from "@/components/settle-singer-cover";

const SettleSinger = memo(() => {
    return (
        <SettleSingerWrapper>
           <div className ="header">
               <span>入驻歌手</span>
                <a href="/todo">查看全部 &gt;</a>
               </div> 
            <div className ="singer">
                <ul>
                    <li>
                        <SettleSingerCover name="张惠妹aMei" born="台湾歌手张惠妹" url="http://p2.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62"/>
                    </li>
                    <li>
                    <SettleSingerCover name="Fine乐团" born="独立音乐人" url="http://p2.music.126.net/1EN_iqQWU_E3DafzEOh3cA==/3302932937408956.jpg?param=62y62"/>
                    </li>
                    <li>
                    <SettleSingerCover name="萬曉利" born="民谣歌手、中国现代民谣的代表人物之一" url="http://p2.music.126.net/ZuktZvjcxpYBjcWC3gmbPg==/19027048718765608.jpg?param=62y62"/>
                    </li>
                    <li>
                    <SettleSingerCover name="音乐人赵雷" born="民谣歌手" url="http://p2.music.126.net/v_zYgE9kmAwVGWV2c8hFxA==/7943971513291094.jpg?param=62y62"/>
                    </li>
                    <li>
                    <SettleSingerCover name="王三溥" born="音乐人" url="http://p2.music.126.net/6wPGl_ddgAbJTx5kOohcyw==/109951163892302996.jpg?param=62y62"/>
                    </li>
                </ul>
            </div>
            <a href="/todo" className ="btn">申请成为网易音乐人</a>
        </SettleSingerWrapper>
    );
});

export default SettleSinger;