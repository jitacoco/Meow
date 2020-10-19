import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import {actionCreators} from './store';


import {
  HeaderWrapper,
  Logo, 
  Nav,
  NavItem,
  SearchInfoSwitch,
  SearchInfo,
  SearchInfoList,
  SearchInfoTitle,
  SearchInfoItem,
  NavSearch,
  Addtion,
  Button,
  SearchWrapper
} 
from './style';


class Header extends Component{
  getListArea(){
    const {focused,list,page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage}= this.props;
    const newList = list.toJS();
    const pageList = [];

    if (newList.length){
      for (let i = (page-1)*3; i<page*3;i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )}
    }
    if(focused || mouseIn){
      return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            <SearchInfoTitle>
             hot trend
             <SearchInfoSwitch onClick={()=>handleChangePage(page, totalPage, this.spinIcon)}>
             <i ref={(icon => {this.spinIcon=icon})}className='iconfont spin'>&#xe851;</i>
               change
             </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
             {pageList}  
            </SearchInfoList>
          </SearchInfo>
      )
  
    }else{
      return null;
    } 
  }
  
  render(){
    const {focused,handleInputFocus,handleInputBlur,list,login,logout}=this.props;
    return(
      <HeaderWrapper>
      <Link to ='/'>
        <Logo />
      </Link>
      <Nav>
        <NavItem className='left active'>Home</NavItem>;
        <NavItem className='left'>App</NavItem>
        {
          login ? 
          <NavItem onClick={logout} className='right'>sign out</NavItem>: 
          <Link to='/login'><NavItem className='right'>sign in</NavItem></Link>
        }
        <NavItem className='right'>
        <i className="iconfont">&#xe627;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            in = {focused}
            timeout={500}
            classNames="slide"
          >
            <NavSearch 
              className={focused ? 'focused' : ''}
              onFocus={()=>handleInputFocus(list)}
              onBlur={handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62f;</i>
          {this.getListArea()}
        </SearchWrapper>
      </Nav>
      <Addtion>
      <Link to='/write'>
          <Button className='writting'>
            <i className="iconfont">+ </i>
            create post</Button>
          <Button className='reg'>sign up</Button>
        </Link>
      </Addtion>
    </HeaderWrapper>
    );
  } 
}




const mapStateToProps = (state) => {
  return{
    focused:state.get('header').get('focused'),
    list: state.getIn(['header','list']) ,
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login:state.getIn(['login','login'])
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    handleInputFocus(list){
      (list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus());
  
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    } ,
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page,totalPage,spin){
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';


      if (page<totalPage){
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }

    },
    logout() {
      dispatch(loginActionCreators.logout());
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Header);