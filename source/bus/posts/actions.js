// Instruments
import { types } from "./types";
import { api, groupID } from "config";

export const postsActions = Object.freeze({
    fetchPosts: () => async (dispatch) => {
        // type: types.FETCH_POSTS,
        dispatch({
            type: types.FETCH_POSTS,
        });

        const response = await fetch(`${api}/feed`, {
            method:  'GET',
            headers: {
                'x-no-auth': groupID,
            },
        });

        const { data: posts, message } = await response.json();

        console.log('message: ', message);

        dispatch({
            type:    types.FETCH_POSTS_SUCCES,
            payload: posts,
        });
    },
    // fetchPosts: () => ({
    //     type: types.FETCH_POSTS,
    // }),
    fetchPostsSucces: () => ({
        type: types.FETCH_POSTS_SUCCES,
    }),
    fetchPostsFail: () => ({
        type: types.FETCH_POSTS_FAIL,
    }),
});
