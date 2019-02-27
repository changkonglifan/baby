import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//redux
import store from './store';
import {
  RouterConfig
} from './router';

const render = (Container) => {
  ReactDOM.render(
    <Provider store={store}>
      <Container></Container>
    </Provider>
    , document.getElementById('root'));
};
render(RouterConfig);
