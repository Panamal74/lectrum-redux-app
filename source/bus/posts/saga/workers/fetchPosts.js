import { call, put, delay } from 'redux-saga/effects';
// import { call, put, select } from 'redux-saga/effects';

import { api, groupID } from '../../../../config';
import { postsActions } from '../../../../bus/posts/actions';
import { uiActions } from "../../../ui/actions";

export function* callFetchPostsWorker () {

    try {
        // console.log('saga works');
        //
        // throw new Error('New Error!!!');
        //
        yield put(uiActions.setPostsFetchingState(true));
        const response = yield call(fetch, `${api}/feed`, {
            method:  'GET',
            headers: {
                'x-no-auth': groupID,
            },
        });

        yield delay(2000);

        // const { data: posts, message } = response.json();
        const { data: posts, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.fetchPostsSuccess(posts));
    } catch (error) {
        yield put(postsActions.fetchPostsFail(error));
    } finally {
        yield put(uiActions.setPostsFetchingState(false));
    }
}
