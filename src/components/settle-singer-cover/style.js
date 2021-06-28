import styled from "styled-components";


export const SettleSCoverWrapper = styled.div`
        width: 210px;
        height: 60px;
        a{
            display: block;
            display: flex;
            background-color: #fafafa;
            
            &:hover{
                text-decoration: none;
            }
            .img{
                height: 60px;
                width: 60px;
                background-image: url(${props => props.url});
            }
            .context{
                flex: 1;
                display: flex;
                flex-direction: column;
                border: 1px solid #e9e9e9;

                p{
                    margin-left: 10px;
                    width: 100px;
                }
                .name{
                    color: #333333;
                    font-size: 14px;
                    margin: 10px 0 5px 10px;
                    font-weight:bold;
                }
                .born{
                    font-size: 12px;
                    color: #666666;
                }
            }
        }
`