import styled  from "styled-components";
import progress_bar from "@/assets/img/progress_bar.png";
import sprite_icon from "@/assets/img/sprite_icon.png";

export const PlayerBarWrapper = styled.div`
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: 52px;
      background-position: 0 0;
      background-repeat: repeat;

      .content{
          position: absolute;
          display: flex;
          justify-content: space-between;
          align-items: center;
          left: 50%;
          transform :translateX(-50%);
          height: 47px;
          bottom: 0;
      }
`

export const Control = styled.div`
        display: flex;
        width: 137px;
        align-items: center;

        .prev,.next{
            width: 28px;
            height: 28px;
            cursor: pointer;
        }
        .prev{
            background-position: 0 -130px;
        }
        .play{
            width: 36px;
            height: 36px;
            background-position: 0 ${props => props.isPlaying? "-165px": "-204px"};
            margin: 0 10px 0 10px;
            cursor: pointer;
        }
        .next{
            background-position: -80px -130px;
        }
`

export const PlayInfo = styled.div`
    display: flex;
    width: 642px;
    align-items: center;

    .image{
        width: 34px;
        height: 35px;
        border-radius: 5px;
        a>img{
            width: 34px;
            height: 35px;
        }
    }
    .info{
        flex: 1;
        color: #a1a1a1;
        margin-left: 10px;

        .song{
            color: #e1e1e1;
            position: relative;
            top: 8px;
            left: 8px;
            .singer-name{
                color: #a1a1a1;
                margin-left: 10px;
            }
        }

        .progress{
            display: flex;
            align-items: center;

            .ant-slider{
                width: 493px;
                margin-right: 10px;
                .ant-slider-rail{
                    height: 9px;
                    background: url(${progress_bar}) right 0;
                }
                .ant-slider-track{
                    height: 9px;
                    background: url(${progress_bar}) left -66px;
                }
                .ant-slider-handle{
                    width: 22px;
                    height: 24px;
                    border: none;
                    background: url(${sprite_icon}) 0 -250px;
                    margin-top: -7px;
                }
            }    
                 .time{
                     .now-time{
                         color: #e1e1e1;
                     }
                     .divider {
                        margin: 0 3px;
                        }
                 }   
        }
    }
`

export const Operator = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;

            .btn{
                height: 25px;
                width: 25px;
                cursor: pointer;
            }
            .left{
                margin-left: 20px;
                display: flex;
                .favor{
                    background-position: -88px -163px;

                    &:hover{
                        background-position: -88px -189px;
                    }
                }
                .share{
                    background-position: -114px -163px;

                    &:hover{
                        background-position: -114px -189px ;
                    }
                }
            }

            .right{
                display: flex;
                width: 126px;
                background-position: -147px -248px;
                padding-left: 13px;

                .volume{
                    background-position: -2px -248px;
                }

                .loop{
                    background-position: ${props => {
                        switch(props.sequence){
                            case 1:
                                return "-66px -248px"
                            case 2:
                                return "-66px -344px"
                            default:
                                return "-3px -344px"
                        }
                    }}
                }

                .playlist{
                    width: 59px;
                    background-position: -42px -68px;

                    span{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        margin-left: 19px;
                        color: #fff;
                    }
                }
            }
`