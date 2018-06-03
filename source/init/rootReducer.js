import { combineReducers } from 'redux';

import { postsReducer as posts } from "../bus/posts/reducer";
import { notificationsReducer as notifications } from "../bus/notification/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";

export const rootReducer = combineReducers({
    posts,
    notifications,
    ui,
});
