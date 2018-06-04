// Core
import { all } from 'redux-saga/effects';

// Instruments
import { postsWatcher } from "../bus/posts/saga";
import { authWatcher } from "../bus/authentication/saga";
import { uiWatcher } from "../bus/ui/saga";

export function* rootSaga () {
    yield all([
        postsWatcher.watchFetchPosts(),
        postsWatcher.watchCreatePosts(),
        authWatcher.watchSignup(),
        authWatcher.watchLogin(),
        authWatcher.watchAuthenticate(),
        authWatcher.watchLogout(),
        uiWatcher.watchInitialise()
    ]);
}
