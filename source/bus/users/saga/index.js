import { takeEvery } from 'redux-saga/effects';

import { asyncTypes } from './asyncTypes';
import { callFetchUsersWorker } from './workers/fetchUsers';

export const usersWatchers = Object.freeze({
    * watchInitialize () {
        yield takeEvery(asyncTypes.FETCH_USERS_ASYNC, callFetchUsersWorker);
    },
});
