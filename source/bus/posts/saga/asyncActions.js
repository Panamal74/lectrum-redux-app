import { asyncTypes } from "./asyncTypes";

export const postsActionsAsync = Object.freeze({
    createPostAsync: (comment) => ({
        type:    asyncTypes.CREATE_POST_ASYNC,
        payload: comment,
    }),
    removePostAsync: (id) => ({
        type:    asyncTypes.REMOVE_POST_ASYNC,
        payload: id,
    }),
    likePostAsync: (id) => ({
        type:    asyncTypes.LIKE_POST_ASYNC,
        payload: id,
    }),
    unlikePostAsync: (id) => ({
        type:    asyncTypes.UNLIKE_POST_ASYNC,
        payload: id,
    }),
});
