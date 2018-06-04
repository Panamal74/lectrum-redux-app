import { types } from './types';

export const usersActions = Object.freeze({
    fillUsers: (users) => ({
        type:    types.FILL_USERS,
        payload: users,
    }),
});
