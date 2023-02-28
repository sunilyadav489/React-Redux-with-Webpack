import React from 'react';
import {createRoot} from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App.js';
import { configureStore } from './Redux/store.js';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>);