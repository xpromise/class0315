import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Container from './containers';
import store from './redux/store';

//渲染组件
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>
  , document.getElementById('app'));

