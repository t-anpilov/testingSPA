import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import './media.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter  } from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'));

serviceWorker.unregister();
