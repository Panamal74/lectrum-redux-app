// Instruments
import { types } from "./types";
// debugger;
//
export const uiActions = Object.freeze({
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
});
