import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

serviceWorker.register();