import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
    isOnline:        false,
    isPostsFetching: false,
    isAuthFetching:  false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ONLINE_STATE:
            return state.set('isOnline', action.payload);

        case types.SET_POSTS_FETCHING_STATE:
            return state.set('isPostsFetching', action.payload);

        case types.SET_AUTH_FETCHING_STATE:
            return state.set('isAuthFetching', action.payload);

        default:
            return state;
    }
};
