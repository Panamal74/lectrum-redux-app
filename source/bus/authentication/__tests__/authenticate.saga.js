import { cloneableGenerator } from 'redux-saga/utils';

import { authActions } from '../../../bus/authentication/actions';
import { callAuthenticateWorker } from '../saga/workers/authenticate';

const authenticateAction = authActions.login(__.credentials);
const saga = cloneableGenerator(callAuthenticateWorker)(authenticateAction);

describe('authenticate saga', () => {
    test('should yield fetch', () => {
        expect(saga.next().value).toMatchSnapshot();
    });

    test('should handle 401 response status', () => {
        const clone = saga.clone();

        localStorage.setItem('token', __.token);

        // should yield transformed data
        expect(clone.next(__.fetchResponseFail).value).toMatchSnapshot();

        // should yield delay
        expect(clone.next(__.responseDataFail).value).toMatchSnapshot();

        // should remove token from localStorage
        expect(clone.next().value).toBeUndefined();
        expect(localStorage.getItem('token')).toBeNull();

        // should call INITIALISE_SUCCESS
        expect(clone.next().value).toMatchSnapshot();
    });
});
