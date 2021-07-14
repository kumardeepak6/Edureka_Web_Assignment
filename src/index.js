import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './Store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
         <App/>
    </React.StrictMode>
  </Provider>
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
