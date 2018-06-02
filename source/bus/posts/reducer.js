// Core
import { List, fromJS } from 'immutable';

// Instruments
import { types } from "./types";

const initialState = List();

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            return fromJS(action.payload);

        default: return state;
    }
};
