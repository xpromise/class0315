import React from 'react';
import ReactDOM from 'react-dom';

import store from './store';
import App from './components/app/App';

function render() {
  ReactDOM.render(<App store={store}/>, document.getElementById('app'));
}
render();
//当我的状态发生变化，重新渲染页面
store.subscribe(() => {
  render();
})