import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import './assets/styles/bootstrap.scss';

serviceWorker.unregister();

ReactDOM.render( < App / > , document.getElementById('root'));