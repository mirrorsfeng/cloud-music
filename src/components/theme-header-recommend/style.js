import styled from "styled-components";
import sprite_02 from "@/assets/img/sprite_02.png";

export const ThemeHeaderWrapper = styled.div`
    height: 33px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 4px 34px;
    background: url(${sprite_02}) no-repeat 0 9999px;
    background-position: -225px -156px;

    border-bottom: 2px solid #C10D0C;

    .left{
        display: flex;
        align-items: center;

        .title{
            font-size: 20px;
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
        .keywords{
            display: flex;

            .item{
                padding-left: 15px;

                span{
                    padding-left: 8px;
                }
            }
        }
    }
    .right{
        display: flex;
        align-items: center;

        .icon{
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-left: 4px;
            background: url(${sprite_02}) no-repeat 0 9999px;
            background-position: 0 -240px;
        }
    }
`

