import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from './App_w_Clock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
