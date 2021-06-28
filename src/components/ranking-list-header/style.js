import styled from "styled-components";

export const RankingWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    height: 33px;
    border-bottom: 2px solid #c20c0c;

    .song-num{
        color: #666;
        display: flex;
        align-items: center;
        position: relative;
        h2{
            margin-right: 15px;

        }
        
    }

    .play-num{
        color: #666;
        .play{
            margin-right: 5px;
        }
        .num{
            color: #c20c0c;
        }
    }
`