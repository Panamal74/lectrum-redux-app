import { asyncTypes } from "./asyncTypes";

export const usersActionsAsync = Object.freeze({
    fetchUserAsync: () => ({
        type: asyncTypes.FETCH_USERS_ASYNC,
    }),
});
