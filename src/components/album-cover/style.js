import styled from "styled-components";

export const AlbumWrapper = styled.div`
    width: ${props => props.width+"px"};


    .album-image{
        position: relative;
        width: ${props => props.width+"px"};
        height: ${props => props.size+"px"};
        margin-top:10px;

        .cover{
       
        background-position: 0 ${props => props.bgp};
        text-indent: -9999px;
        }
    }

   .info{
       font-size: 12px;
       width: ${props => props.size +"px"};
       .name{
           color: #000;
           &:hover{
               text-decoration: underline;
               cursor: pointer;
           }
       }
       .artist{
           color: #666;
           &:hover{
               text-decoration: underline;
               cursor: pointer;
           }
       }
   }
`