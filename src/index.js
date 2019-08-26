import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './menu';
import {Provider} from 'react-redux';
import store from './redux/store/store';

const root = document.getElementById("root");

const App = () => (
  <Provider store={store}>
    <Menu/>
  </Provider>
)

ReactDOM.render(<App/>, root);