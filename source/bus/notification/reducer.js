import { List } from 'immutable';

import { types } from './types';
// import { notification } from "../../init/middleware/notification";

const initialState = List();

export const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_NOTIFICATION:
            return state.size < 1 ? state.push(action.payload) : state;

        case types.HIDE_NOTIFICATION:
            return state.filter((notification) => notification.id !== action.payload);
        default:
            return state;
    }
};