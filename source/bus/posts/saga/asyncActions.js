import { asyncTypes } from "./asyncTypes";

export const postsActionsAsync = Object.freeze({
    createPostAsync: (comment) => ({
        type:    asyncTypes.CREATE_POST_ASYNC,
        payload: comment,
    }),
});
