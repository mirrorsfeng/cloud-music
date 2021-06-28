import styled from "styled-components";


export const SettleSingerWrapper = styled.div`
        margin-top: 20px;
        width: 210px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        .header{
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ccc;
           height: 23px;
           margin: 20px 0;
           span{
               font-weight: bold;
           }
        }

        .singer{
            ul>li{
                margin-bottom: 15px;
            }
        }

        .btn{
            display: inline-block;
            width:210px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            margin-top: 15px;
            margin-bottom: 20px;
            border: 1px solid grey;
            border-radius: 4px;
            font-weight: bold;
            &:hover{
                text-decoration: none;
                background-color: grey;
            }
        }
`