import { call, put, select } from 'redux-saga/effects';

import { api } from '../../../../config';
import { uiActions } from "../../../ui/actions";
import { postsActions } from '../../../../bus/posts/actions';

export function* callUnlikePostsWorker ({ payload: postId }) {

    try {
        yield put(uiActions.setPostsFetchingState(true));

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/feed/like/${postId}`, {
            method:  'PUT',
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.j()]);

            throw new Error(message);
        }

        const likerId = yield select((state) =>
            state.profile.get('id')
        );

        yield put(postsActions.unlikePost(likerId, postId));
    } catch (error) {
        yield put(uiActions.emitError(error, 'unlikePostWorker'));
    } finally {
        yield put(uiActions.setPostsFetchingState(false));
    }
}
