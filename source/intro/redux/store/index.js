import { createStore } from 'redux';

import { rootReducer } from "../components/reducers";

export const store = createStore(rootReducer);
