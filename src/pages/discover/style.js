import styled from "styled-components";


export const AppDiscoverWrapper = styled.div`
 .top{
    height: 30px;
    background-color: #C20C0C;
 }
`

export const TopMenu = styled.div`
    display: flex;
    padding-left: 180px;
    top: -4px;
    position: relative;
    .item{
        a{
            display: inline-block;
            position: relative;
            color: #fff;
            padding: 0 13px;
            margin: 7px 17px 0;
            line-height: 20px;

            &:hover,&.active{
                text-decoration: none;
                border-radius: 20px;
                background-color: #9B0909;
            }
        }
    }
`