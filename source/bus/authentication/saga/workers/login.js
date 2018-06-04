import { call, put } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';

import { api } from '../../../../config';
import { authActions } from '../../../../bus/authentication/actions';
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../../bus/profile/actions";
import { book } from '../../../../navigation/book';

export function* callLoginWorker ({ payload: credentials }) {

    try {
        yield put(uiActions.setAuthFetchingState(true));
        const response = yield call(fetch, `${api}/user/login`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        // const { data: posts, message } = response.json();
        const { data: profile, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        // yield put(uiActions.setOnlineState(true));
        // console.log(response.status);

        yield localStorage.setItem('token', profile.token);

        yield put(authActions.loginSuccess());
        yield put(profileActions.fillProfile(profile));
        yield put(replace(book.feed));
        yield put(actions.reset('forms.login'));
    } catch (error) {
        yield put(authActions.loginFail(error));
    } finally {
        yield put(uiActions.setAuthFetchingState(false));
    }

}
