import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/icon/themify-icons/themify-icons.css';
import './assets/vendors/bootstrap.min.css';
import './assets/css/style.css';
import './assets/icon/feather/css/feather.css';
import './assets/icon/font-awesome/all.min.css';
import App from './components/App';
import Provider from './contexts';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
