import styled from "styled-components";

export const RankingLeftCpWrapper = styled.div`

    display: flex;
    width: 240px;
    height: 60px;
    cursor: pointer;
    background-color: ${props => props.stand===props.currentId? "#e6e6e6":""};

    padding: 10px 0 10px 20px;
    &:hover{
        background-color: #e6e6e6;
    }

    .image{
        width: 40px;
        height: 40px;
    }

    .content{
        margin-left: 8px;
        height: 40px;

        display: flex;
        flex-direction: column;

        .name{
            color: #000;
            white-space: nowrap;
            color: #999;
        }
    }
`