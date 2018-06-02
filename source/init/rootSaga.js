// Core
import { all } from 'redux-saga/effects';

// Instruments
import { postsWatcher } from "../bus/posts/saga";

export function* rootSaga () {
    yield all([postsWatcher.watchFetchPosts()]);
}
