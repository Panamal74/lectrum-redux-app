import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
    isPostsFetching: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_POSTS_FETCHING_STATE:
            return state.set('isPostsFetching', action.payload);

        default:
            return state;
    }
};
