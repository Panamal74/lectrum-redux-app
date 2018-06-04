// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from "../../../bus/posts/types";
import { asyncTypes } from "./asyncTypes";
import { callFetchPostsWorker } from "./workers/fetchPosts";
import { callCreatePostsWorker } from "./workers/createPosts";

export const postsWatcher = Object.freeze({
    * watchFetchPosts () {
        yield takeEvery(types.FETCH_POSTS, callFetchPostsWorker);
    },

    // create
    * watchCreatePosts () {
        yield takeEvery(asyncTypes.CREATE_POST_ASYNC, callCreatePostsWorker);
    },

    // remove
    // like
});
