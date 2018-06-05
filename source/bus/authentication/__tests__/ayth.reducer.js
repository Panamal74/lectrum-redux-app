import { Map } from 'immutable';
import { authReducer } from "../reducer";

// import { types } from "../types";

import { authActions } from "../actions";

const initialState = Map({
    isAuthenticated: false,
});

describe('auth reducer:', () => {
    test('should return initial state', () => {
        // expect(authReducer(undefined, ));
        expect(authReducer(void 0, { type: '@@INIT' }))
            .toEqual(initialState);
    });
    test('should handle LOGIN_SUCCESS, SIGNUP_SUCCESS, AUTHENTICATE_SUCCESS', () => {
        expect(authReducer(void 0, authActions.loginSuccess())).toEqual(
            initialState.set('isAuthenticated', true),
        );
        expect(authReducer(void 0, authActions.signupSuccess())).toEqual(
            initialState.set('isAuthenticated', true),
        );
        expect(authReducer(void 0, authActions.authenticateSuccess())).toEqual(
            initialState.set('isAuthenticated', true),
        );
    });

    test('shoul handle LOGOUT_SUCCESS', () => {
        const authenticatedState = initialState.set('isAuthenticated', true);

        expect(authReducer(authenticatedState, authActions.logoutSuccess()))
            .toEqual(authenticatedState.set('isAuthenticated', false));
    });
});
