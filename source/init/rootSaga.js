// Core
import { all } from 'redux-saga/effects';

// Instruments
import { postsWatcher } from "../bus/posts/saga";
import { authWatcher } from "../bus/authentication/saga";
import { uiWatcher } from "../bus/ui/saga";
import { usersWatchers } from "../bus/users/saga";

export function* rootSaga () {
    yield all([
        postsWatcher.watchFetchPosts(),
        postsWatcher.watchCreatePost(),
        postsWatcher.watchRemovePost(),
        postsWatcher.watchLikePost(),
        postsWatcher.watchUnlikePost(),
        authWatcher.watchSignup(),
        authWatcher.watchLogin(),
        authWatcher.watchAuthenticate(),
        authWatcher.watchLogout(),
        uiWatcher.watchInitialise(),
        usersWatchers.watchInitialize()
    ]);
}
