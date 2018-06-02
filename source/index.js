// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import './theme/init';
import { store } from './intro/redux/store';

// Main
import Book from './intro/redux';

render(
    <Provider store = { store }>
        <Book />
    </Provider>,
    document.getElementById('app')
);
