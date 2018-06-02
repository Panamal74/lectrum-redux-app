import { createStore, applyMiddleware, compose } from 'redux';

import { rootReducer } from "./rootReducer";
import { middleware, dev } from "./middleware";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devTools ? devTools : compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);
