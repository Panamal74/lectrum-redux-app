import { postsActions } from "../actions";
// import { types } from "../types";

describe('posts actions:', () => {
    describe('fetchPosts: ', () => {
        test('FETCH_POSTS', () => {
            expect(postsActions.fetchPosts()).toMatchSnapshot();
        });
        test('FETCH_POSTS_SUCCESS', () => {
            expect(postsActions.fetchPostsSuccess(['1', '2', '3'])).toMatchSnapshot();
        });
        test('FETCH_POSTS_FAIL', () => {
            expect(postsActions.fetchPostsFail()).toMatchSnapshot();
        });
    });

    describe('createPost: ', () => {
        test('CREATE_POST', () => {
            expect(postsActions.createPost('123')).toMatchSnapshot();
        });
    });

    describe('removePost: ', () => {
        test('REMOVE_POST', () => {
            expect(postsActions.removePost('123')).toMatchSnapshot();
        });
    });

    describe('likePost: ', () => {
        test('LIKE_POST', () => {
            expect(postsActions.likePost({ id: '123' }, '123')).toMatchSnapshot();
        });
    });

    describe('unlikePost: ', () => {
        test('UNLIKE_POST', () => {
            expect(postsActions.unlikePost('123', '123')).toMatchSnapshot();
        });
    });

});
