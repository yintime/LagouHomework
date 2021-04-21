import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'
import './axios.config'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

