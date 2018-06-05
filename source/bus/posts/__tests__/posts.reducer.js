import { Map, List } from 'immutable';

import { postsReducer } from "../reducer";
import { postsActions } from "../actions";

const liker = Map({
    firstName: 'firstName',
    lastName:  'lastName',
    id:        'likerId',
});

const posts = List([
    Map({
        id:    '123',
        likes: List(
            [liker]
        ),
    })
]);

describe('posts reducer', () => {
    test('should return initial state', () => {
        expect(postsReducer(void 0, { type: '@@INIT' })).toMatchSnapshot();
    });

    test('should handle FETCH_POSTS', () => {
        expect(
            postsReducer(void 0, postsActions.fetchPostsSuccess())
        ).toMatchSnapshot();
    });

    test('should handle FETCH_POSTS_SUCCESS', () => {
        expect(
            postsReducer(void 0, postsActions.fetchPostsSuccess(['1', '2', '3']))
        ).toMatchSnapshot();
    });

    test('should handle FETCH_POSTS_FAIL', () => {
        expect(
            postsReducer(void 0, postsActions.fetchPostsFail(__.error))
        ).toMatchSnapshot();
    });

    test('should handle CREATE_POST', () => {
        expect(
            postsReducer(void 0, postsActions.createPost('123'))
        ).toMatchSnapshot();
    });

    test('should handle REMOVE_POST', () => {
        expect(
            postsReducer(void 0, postsActions.removePost('123'))
        ).toMatchSnapshot();
    });

    test('should handle LIKE_POST', () => {
        expect(
            postsReducer(posts, postsActions.likePost(liker, '123'))
        ).toMatchSnapshot();
    });

    test('should handle UNLIKE_POST', () => {
        expect(
            postsReducer(posts, postsActions.unlikePost('likerId', '123'))
        ).toMatchSnapshot();
    });

});
