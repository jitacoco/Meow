import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;


export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 205px;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
//Aa + sign in
export const Nav = styled.div`
    width: 900px;
    height: 100%;
    padding-right: 215px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    padding: 0 14px;
    font-size: 17px;
    line-height: 56px;
    color: #004B64;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #8D8D8F;
    }
    &.active {
        color: #004B64;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder:'search for'
})`
    width: 160px;
    height: 38px;
    padding: 0 40px 0 20px;
    margin-top: 9px;
    margin-left: 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 250px;
        
    }
    &.slide-enter {
        transition:all .2s ease-out;
    }
    &.slide-enter-active{
        width:250px
    }
    &.slide-exit {
     transition: all .5s ease-out;
    }
    &.slide-exit-active {
     width: 160px;
    }

`;

export const SearchInfo = styled.div`
    position: absolute;
    left:0;
    top: 56px;
    width:240px;
  
    padding:0 20px;
    line-height: 20px;
    border-radius: 8px;
    border: 1px solid #ddd;
    box-shadow:0 0 7px rgba(0,0,0,0.1);
    background:#fff;

`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size:14px;
    color: #969696;

`

export const SearchInfoSwitch =styled.span`
    float:right;
    font-size: 13px;
    .spin{
        display: block;
        cursor:pointer;
		float: left;
		font-size: 12px;
		margin-right: 2px;
        transition: all .3s ease-in;
        transform:rotate(0deg);
		transform-origin: center center;
    }
`
export const SearchInfoItem =styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
    padding: 0 5px;
    line-height: 22px;
    border-radius: 15px;
    border: 1px solid #ddd;
    color: #787878;
    font-size: 12px;
   
`
export const SearchInfoList = styled.a`
    overflow: hidden;
`;

export const Addtion = styled.div`
    position: absolute;
    right: 260px;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 10px;
    padding: 0 20px;

    font-size: 16px;
    &.reg {
        line-height: 35px;
        border-radius: 19px;
        border: 2px solid #004B64;
        
        color: #004B64;
    }
    &.writting {
        line-height: 38px;
        border-radius: 19px;
        color: #fff;
        background-image: linear-gradient(70deg,#004B64 , #2fb9ba);
    }
`;

export const SearchWrapper = styled.div`
   position: relative;
   float: left;
   .zoom {
       position: absolute;
       right:5px;
       bottom: 5px;
       width: 30px;
       line-height: 30px;
       border-radius: 15px;
       text-align: center;
       &.focused {
           background:#777;
           color:#fff;
       }
   }
`;

