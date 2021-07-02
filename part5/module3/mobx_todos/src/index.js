import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './axios.config'
import todo from './Store/TodoStore'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider todo={todo}>
    <App />
  </Provider>,
  document.getElementById('root')
);

