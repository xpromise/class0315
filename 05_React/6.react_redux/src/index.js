import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import App from './components/app/App';

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
//当我的状态发生变化，重新渲染页面
store.subscribe(() => {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
})