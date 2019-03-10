import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import './media.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter  } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './store/configureStore';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
