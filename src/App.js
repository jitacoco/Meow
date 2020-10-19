import React, { Component } from 'react';
import Header from './common/header/index';
import {GlobalStyle} from './style';
import{ GlobalStyleFont} from './static/iconfont/iconfont';
import { Provider } from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';
import store from './store';


class App extends Component {
  render(){
    return (
      <Provider store={store}>   
          <GlobalStyle />
          <GlobalStyleFont />
          <BrowserRouter>
            <Header />
            <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
            </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
