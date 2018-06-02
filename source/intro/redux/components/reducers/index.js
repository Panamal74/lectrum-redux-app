// Core
import { combineReducers } from 'redux';

// Instruments
import { bookReducer } from "./book";

export const rootReducer = combineReducers({
    book: bookReducer,
});
