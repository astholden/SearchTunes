import React from 'react';
import App from './App.jsx';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import style from './style/application.scss';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);