import styled from "styled-components"; 


export const SongsCoverWrapper = styled.div`
    width: 140px;
    margin: 20px ${props => (props.right || 0)} 20px 0;

    .cover-top{
       
        position: relative;

        &>img{
            width: 140px;
            height: 140px;
        }

        .cover{
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 140px;
        height: 140px;
        background-position: 0 0;
        

        .info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            padding: 0 10px;
            bottom: 0;
            left: 0;
            right: 0;
            background-position: 0 -537px;
            color: #ccc;
            height: 27px;
            
            .erji{
                margin-right: 5px;
                display: inline-block;
                width: 14px;
                height: 11px;
                background-position: 0 -24px;
            }
            
            .play{
                display: inline-block;
                width: 16px;
                height: 17px;
                background-position: 0 0;
            }
        }
        }
    }


    .cover-bottom{
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        
        &:hover{
            text-decoration: underline;
        }
    }

    .cover-source{
        color: #666;
    }
`