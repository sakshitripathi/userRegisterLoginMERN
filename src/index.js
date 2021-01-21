import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CreateUser from './component/createuser';
import UserDetails from './component/userDetails';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Types } from './constants/actionTypes';
import { BrowserRouter, Route } from 'react-router-dom';

const store=configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <Route path="/" component={ CreateUser }/>
        <Route path="/user-details" component={ UserDetails }/>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
