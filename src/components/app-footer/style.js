import styled from "styled-components";
import footer_02 from "@/assets/img/sprite_footer_02.png";
import footer_01 from "@/assets/img/sprite_footer_01.png";

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;


.content{
    width: 980px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
`


export const AppLeftWrapper = styled.div`
  padding-top: 15px;
  line-height: 24px;
  .footerlinks{
    a {
      color: #999;
    }
  }
  .line{
    margin: 0 10px 0 10px;
    color: #999;
  }
  .copyright{
   span{
     padding-right:15px;
   }
  }

  .report{
    span{
      padding-right: 20px;
    }
  }
  .info{
    span{
      padding-right: 10px;
    }
  }
`


export const AppRightWrapper = styled.ul`
  display: flex;

  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

  .link{
    display: block;
    width: 50px;
    height: 45px;
    background-image: url(${footer_02});
    background-size: 110px 450px;
  }
  :nth-child(1) .link{
      background-position: -60px -101px;
  }
  :nth-child(2) .link{
      background-position: 0px 0px;
  }
  :nth-child(3) .link{
      background-position: -60px -50px;
  }
  :nth-child(4) .link{
      background-position: 0 -101px;
  }
  .title{
    margin-top: 5px;
    display: block;
    width: 52px;
    height: 10px;
    background-image: url(${footer_01});
    background-size: 180px 100px;
  }
  :nth-child(1) .title{
    background-position: -1px -90px;
  }
  :nth-child(2) .title{
    background-position: 0 0 ;
    margin-top: 7px;
  }
  :nth-child(3) .title{
    background-position: 0 -54px;
    margin-top: 6px;
  }
  :nth-child(4) .title{
    background-position: -1px -72px;
    margin-top: 6px;
  }
  }
`


