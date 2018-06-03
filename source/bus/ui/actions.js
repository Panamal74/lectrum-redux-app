// Instruments
import { types } from "./types";
// debugger;
//
export const uiActions = Object.freeze({
    setPostsFetchingState: (isPostsFetching) => ({
        type:    types.SET_POSTS_FETCHING_STATE,
        payload: isPostsFetching,
    }),
    setAuthFetchingState: (isAuthFetching) => ({
        type:    types.SET_POSTS_FETCHING_STATE,
        payload: isAuthFetching,
    }),
    setOnlineState: (isOnline) => ({
        type:    types.SET_POSTS_FETCHING_STATE,
        payload: isOnline,
    }),
});
