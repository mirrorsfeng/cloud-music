import styled from "styled-components";
import sprite_02 from "@/assets/img/sprite_02.png";

export const LoginWrapper = styled.div`
        display: flex;
        flex-direction: column;
        background: url(${sprite_02}) 0 0;
        height: 126px;

        .content{
           

           p{
                width: 205px;
                margin: 0 auto;
                line-height: 22px;
                padding: 16px 0;
                color: #666666;
            }
        }

        .login{
            text-align: center;
            .btn{
                
                display: inline-block;
                width: 100px;
                height: 31px;
                margin: 0 auto;
                color: #fff;
                background: url(${sprite_02}) 0 -195px;
                cursor: pointer;
                line-height: 31px;
                
                &:hover{
                    text-decoration: none;
                    background-position: -110px -195px;
                }
            }
        }
`