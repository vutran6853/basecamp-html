import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Computer from './Computer';
import registerServiceWorker from './registerServiceWorker';
import Maths from './math';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(<Computer />, document.getElementById('computer'));
registerServiceWorker();

ReactDOM.render(<Maths />, document.getElementById('maths'));
registerServiceWorker();

