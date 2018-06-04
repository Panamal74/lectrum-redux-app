// Core
import { List, fromJS } from 'immutable';

// Instruments
import { types } from "./types";

const initialState = List(); // <=> posts

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            return fromJS(action.payload);

        case types.CREATE_POST:
            return state.unshift(fromJS(action.payload));

        case types.REMOVE_POST:
            return state.filter((post) => post.get('id') !== action.payload);
            // return state.shift(fromJS(action.payload));

        case types.LIKE_POST:
            return state.updateIn(
                [
                    state.findIndex(
                        (post) => post.get('id') === action.payload.postId,
                    ),
                    'likes'
                ],
                (likes) => likes.unshift(action.payload.liker),
            );

        case types.UNLIKE_POST:
            return state.updateIn(
                [
                    state.findIndex(
                        (post) => post.get('id') === action.payload.postId,
                    ),
                    'likes'
                ],
                // (likes) => likes.delete(
                //     likes.findIndex(
                //         (like) => like.get('id') === action.payload.likerId,
                //     ),
                // ),
                (likes) => likes.filter(
                    (like) => like.get('id') !== action.payload.likerId,
                ),
            );

        default: return state;
    }
};
