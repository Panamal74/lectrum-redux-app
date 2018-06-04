// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { types } from "../../../bus/posts/types";
import { asyncTypes } from "./asyncTypes";
import { callFetchPostsWorker } from "./workers/fetchPosts";
import { callCreatePostsWorker } from "./workers/createPosts";
import { callRemovePostsWorker } from "./workers/removePosts";
import { callLikePostsWorker } from "./workers/likePost";
import { callUnlikePostsWorker } from "./workers/unlikePost";

export const postsWatcher = Object.freeze({
    * watchFetchPosts () {
        yield takeEvery(types.FETCH_POSTS, callFetchPostsWorker);
    },

    // create
    * watchCreatePost () {
        yield takeEvery(asyncTypes.CREATE_POST_ASYNC, callCreatePostsWorker);
    },

    // remove
    * watchRemovePost () {
        yield takeEvery(asyncTypes.REMOVE_POST_ASYNC, callRemovePostsWorker);
    },

    // like
    * watchLikePost () {
        yield takeEvery(asyncTypes.LIKE_POST_ASYNC, callLikePostsWorker);
    },

    // unlike
    * watchUnlikePost () {
        yield takeEvery(asyncTypes.UNLIKE_POST_ASYNC, callUnlikePostsWorker);
    },

});
