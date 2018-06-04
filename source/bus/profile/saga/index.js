// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from "./asyncTypes";
import { callUpdateProfileWorker } from "./workers/updateProfile";
import { callUpdateAvatarWorker } from "./workers/updateAvatar";

export const profileWatchers = Object.freeze({
    * watchUpdateProfileUsers () {
        yield takeEvery(asyncTypes.UPDATE_PROFILE_ASYNC, callUpdateProfileWorker);
    },
    * watchUpdateAvatarUsers () {
        yield takeEvery(asyncTypes.UPDATE_AVATAR_ASYNC, callUpdateAvatarWorker);
    },
});
