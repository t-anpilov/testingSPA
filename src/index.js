import React from 'react';
import ReactDOM from 'react-dom';
import './css/reset.css';
import './css/index.css';
import './css/media.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter  } from 'react-router-dom'



ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
