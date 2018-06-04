import { call, put, delay } from 'redux-saga/effects';

import { api } from '../../../../config';
import { authActions } from '../../../../bus/authentication/actions';
import { uiActions } from "../../../ui/actions";
import { profileActions } from "../../../../bus/profile/actions";

export function* callAuthenticateWorker ({ payload: token }) {

    try {
        const response = yield call(fetch, `${api}/user/login`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });

        // const { data: posts, message } = response.json();
        const { data: profile, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            if (response.status === 401) {
                yield localStorage.removeItem('token');

                return null;
            }
            throw new Error(message);
        }

        delay(500);

        yield put(authActions.authenticateSuccess());

        yield localStorage.setItem('token', profile.token);
        yield put(profileActions.fillProfile(profile));
    } catch (error) {
        yield put(authActions.authenticateFail(error));
    } finally {
        yield put(uiActions.initialiseSuccess());
    }
}
