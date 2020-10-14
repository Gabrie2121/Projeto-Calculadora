import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import * as serviceWorker from './serviceWorker';

const el = document.getElementById('root');

ReactDOM.render(
  <React.Fragment>
    <App></App>
  </React.Fragment>,
  el
);

serviceWorker.unregister();
