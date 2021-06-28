import styled  from "styled-components";

export const RankingTopWrapper = styled.div`
        display: flex;
        
        padding: 40px;
        .image{
            
            padding: 3px;
            border: 1px solid #ccc;
            position: relative;
            margin-right: 30px;

            img{
                width: 150px;
                height: 150px;
            }
        }

        .content{
            display: flex;
            flex-direction:column;
            
            

            .message{
                h1{
                 margin: 10px 0 10px 0;
                 
                }
                .time{
                    display: flex;
                    align-items: center;
                    margin-bottom: 30px;
                    .clock{
                        background-position: -18px -682px;
                        width: 13px;
                        height: 13px;
                    }
                    .update{
                        color: #666;
                        margin-left: 5px;
                        font-size: 12px;
                    }
                }
            }
        }
`