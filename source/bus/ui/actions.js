// Instruments
import { types } from "./types";
// debugger;
//
export const uiActions = Object.freeze({
    emitError: (error, meta = null) => ({
        type:    types.EMIT_ERROR,
        payload: error,
        error:   true,
        meta,
    }),
    initialise: () => ({
        type: types.INITIALISE,
    }),
    initialiseSuccess: () => ({
        type: types.INITIALISE_SUCCESS,
    }),
    setPostsFetchingState: (isPostsFetching) => ({
        type:    types.SET_POSTS_FETCHING_STATE,
        payload: isPostsFetching,
    }),
    setAuthFetchingState: (isAuthFetching) => ({
        type:    types.SET_AUTH_FETCHING_STATE,
        payload: isAuthFetching,
    }),
    setOnlineState: (isOnline) => ({
        type:    types.SET_ONLINE_STATE,
        payload: isOnline,
    }),
    setProfileFetchingState: (state) => ({
        type:    types.SET_PROFILE_FETCHING_STATE,
        payload: state,
    }),
    setProfileEditingState: (state) => ({
        type:    types.SET_PROFILE_EDITING_STATE,
        payload: state,
    }),
    setAvatarFetchingState: (state) => ({
        type:    types.SET_AVATAR_FETCHING_STATE,
        payload: state,
    }),
    setPasswordEditingState: (state) => ({
        type:    types.SET_PASSWORD_EDITING_STATE,
        payload: state,
    }),
});
