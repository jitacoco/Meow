import React ,{PureComponent} from 'react';
import {connect} from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators} from './store';

import { 
    HomeWrapper,
    HomeRight,
    HomeLeft,
    BackTop,
} from './style';

class Home extends PureComponent {
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' alt='' src="http://5b0988e595225.cdn.sohucs.com/images/20191024/7a0906c51c484e4cbfbcda1b444a3b3f.jpeg" />
         <List/>
        </HomeLeft>
        <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
        </HomeRight>
        { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>👆</BackTop> : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount() {
		window.removeEventListener('scroll', this.props.changeScrollTopShow);
	}
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
});

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
	},
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

    

export default connect(mapState, mapDispatch) (Home);