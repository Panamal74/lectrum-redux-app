// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from "../../../bus/posts/types";
import { callFetchPostsWorker } from "./workers/fetchPosts";

export const postsWatcher = Object.freeze({
    * watchFetchPosts () {
        yield takeEvery(types.FETCH_POSTS, callFetchPostsWorker);
    },
});
