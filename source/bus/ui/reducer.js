import { Map } from 'immutable';

import { types } from './types';

const initialState = Map({
    isOnline:          false,
    isPostsFetching:   false,
    isAuthFetching:    false,
    isInitialised:     false,
    isProfileEditing:  false,
    isPasswordEditing: false,
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ONLINE_STATE:
            return state.set('isOnline', action.payload);

        case types.SET_POSTS_FETCHING_STATE:
            return state.set('isPostsFetching', action.payload);

        case types.INITIALISE_SUCCESS:
            return state.set('isInitialised', true);

        case types.SET_AUTH_FETCHING_STATE:
            return state.set('isAuthFetching', action.payload);

        case types.SET_PROFILE_EDITING_STATE:
            return state.set('isProfileEditing', action.payload);

        case types.SET_PASSWORD_EDITING_STATE:
            return state.set('isPasswordEditing', action.payload);

        default:
            return state;
    }
};
