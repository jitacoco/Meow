import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginWrapper>
         <LoginBox>
           <Input placeholder='Your ID' ref={(input) => {this.account = input}}/>
           <Input placeholder='Password' type='password' ref={(input) => {this.password = input}}/>
           <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
         </LoginBox>
       </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login(accountEl, passwordEl) {
    dispatch(actionCreators.login(accountEl.value, passwordEl.value));
  }
});

export default connect(mapState, mapDispatch)(Login);