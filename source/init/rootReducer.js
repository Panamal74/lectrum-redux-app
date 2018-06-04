import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import { postsReducer as posts } from "../bus/posts/reducer";
import { notificationsReducer as notifications } from "../bus/notification/reducer";
import { uiReducer as ui } from "../bus/ui/reducer";
import { authReducer as authentication } from "../bus/authentication/reducer";
import { profileReducer as profile } from "../bus/profile/reducer";
import { formsReducer as forms } from "../bus/forms/reducer";
import { userReducer as users } from "../bus/users/reducer";

export const rootReducer = combineReducers({
    router,
    posts,
    notifications,
    ui,
    authentication,
    profile,
    forms,
    users,
});
