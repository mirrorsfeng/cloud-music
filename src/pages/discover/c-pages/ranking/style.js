import styled  from "styled-components";
import wrap3 from "@/assets/img/wrap3.png";

export const RankingWrapper = styled.div`

        display: flex;
        background-image: url(${wrap3});
        width: 970px;
        border: 1px solid #d3d3d3;
        margin: 0 auto;
        
`


export const RankingLeftWrapper = styled.div`
        
    h2{
        font-size: 14px;
        color: #000;
        padding: 0 10px 5px 15px;
        font-weight: bold;
    }

    .firstRk{
        width: 240px;
        margin-top: 40px;
    }

    .secondRk{
        h2{
            margin-top: 10px;
        }
    }
`

export const RankingRightWrapper = styled.div`
   
`