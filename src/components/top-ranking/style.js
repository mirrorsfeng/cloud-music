import styled  from "styled-components";


export const TopRankingWrapper = styled.div`
    flex: 1;

    .header{
        height: 100px;
        display: flex;

        margin: 20px 0 0 20px;

        .image{
            width: 80px;
            height: 80px;
            position: relative;

        img{
            width: 80px;
            height: 80px;
        }
        a{
            text-indent: -9999px;
        }
    }

    .header-info{
        margin: 5px 0 0 10px;
        .title{
            font-size: 14px;
            color: #333;
            font-weight: 700;
        }
        .anchour{
            margin-top: 10px;
            .btn{
                display: inline-block;
                width: 22px;
                height: 22px;
                margin-right:10px;
                text-indent: -9999px;
            }
            .play{
                background-position: -267px -205px;

                &:hover{
                    background-position: -267px -235px;
                }
            }
            .add{
                background-position: -300px -205px;
            }
        }
    }
}

    .info{
        
       

        .item{
            display: flex;
            position: relative;
            align-items: center;
            position: relative;
            height: 32px;

            :nth-child(-n+3) .word{
                color: #c10d0c;
            }

          

            .word{
                font-size: 16px;
                width: 35px;
                text-align: center;
                margin-left: 10px;
            }
            .content-info{
                color: #000;
                width: 170px;
                height: 17px;
                line-height: 17px;
                display: flex;
                justify-content: space-between;
            .song-name{
               flex: 1;
               
            }
            .operate{
               
                display: flex;
                align-items: center;
                display: none;
                width: 82px;
                .btn{
                    width: 17px;
                    height: 17px;
                    margin-left: 10px;
                    cursor: pointer;
                }
                .play{
                    background-position: -267px -268px;
                }
                .add{
                    position: relative;
                    top: 2px;
                    background-position: 0 -700px;
                }
                .favor{
                    background-position: -297px -268px;
                }
            }
        }
        &:hover{
            .operate{
                display: block;
            }
        }
    }
       
    }

    .footer{
        display: flex;
        height: 32px;
        justify-content: flex-end;
        align-items: center;
        margin-right: 20px;

        a{
            color: #000;
        }
    }
` 