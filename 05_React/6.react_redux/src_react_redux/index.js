import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import Counter from './containers/Counter';

ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>, document.getElementById('app'));

