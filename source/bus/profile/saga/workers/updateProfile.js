import { call, put, select } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

import { api } from '../../../../config';
import { uiActions } from "../../../ui/actions";
import { profileActions } from '../../../../bus/profile/actions';
import { profileActionsAsync } from '../asyncActions';

export function* callUpdateProfileWorker ({
    payload: {
        firstName,
        lastName,
        avatar = [],
        oldPassword,
        newPassword: password,
    },
}) {

    try {
        yield put(uiActions.setProfileFetchingState(true));

        if (avatar.length) {
            yield put(profileActionsAsync.updateAvatarAsync(avatar));
        }

        const token = yield select((state) => state.profile.get('token'));

        const response = yield call(fetch, `${api}/user`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  token,
            },
            body:
                JSON.stringify({
                    firstName,
                    lastName,
                    oldPassword,
                    password,
                }),
        });

        const { data: user, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(user));
        yield put(actions.reset('form.user.password.oldPassword'));
        yield put(actions.reset('form.user.password.newPassword'));
    } catch (error) {
        yield put(uiActions.emitError(error, 'callUpdateProfileWorker'));
    } finally {
        yield put(uiActions.setPostsFetchingState(false));
    }
}
