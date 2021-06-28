import styled from "styled-components";

import sprite_table from "@/assets/img/sprite_table.png";

export const RankingRightWrapper = styled.div`
    padding: 0 40px;

    .play-list{
        table{
            width: 100%;
            border: 1px solid #d9d9d9;
        

        thead{
            th{
                height: 34px;
                line-height: 34px;
                background-image: url(${sprite_table});
                color: #666;
                border: 1px solid #ddd;
                border-width: 0 0 1px 1px;
                padding-left: 10px;
            }

                .ranking{
                width: 77px;
                border-left: 0;
            }
            .duration{
                width: 91px;
            }
                }

                tbody{
                    td{
                        padding: 6px 10px;
                    }
                    td:last-child {
                        cursor: pointer;
                        &:hover{
                            text-decoration: underline;
                        }
                    }

                    tr:nth-child(2n) {
                        background-color: #fff;
                    }
                    tr:nth-child(2n+1) {
                        background-color: #f7f7f7;
                    }

                    .rank-num{
                        display: flex;

                        span{
                            display: inline-block;
                            width: 25px;
                            height: 18px;
                            text-align: center;
                            color: #999;
                            margin-right: 10px;
                        }

                        .new{
                            width: 16px;
                            height: 17px;
                            background-position: -67px -283px;
                        }
                    }

                    .song-name{
                        display: flex;
                        align-items: center;

                        img{
                            margin: 5px 7px 5px 0;
                        }

                        .name{
                            cursor: pointer;
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        .play{
                            display: inline-block;
                            width: 17px;
                            height: 17px;
                            background-position: 0 -103px;
                            margin: 0 10px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
   
`


