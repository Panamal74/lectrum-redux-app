import { socket } from '../../init/socket';
import { postsActions } from "../posts/actions";
import { uiActions } from "../ui/actions";

export const socketActions = Object.freeze({
    listenConnection: () => (dispatch) => {
        socket.on('connect', () => {
            dispatch(uiActions.setOnlineState(true));
        });
        socket.on('disconnect', () => {
            dispatch(uiActions.setOnlineState(false));
        });
    },
    listenPosts: () => (dispatch, getState) => {
        const currentUserId = getState().profile.get('id');

        socket.on('create', (response) => {
            const { data: post, meta } = JSON.parse(response);

            if (currentUserId === meta.userID) {
                return null;
            }

            dispatch(postsActions.createPost(post));
        });

        socket.on('remove', (response) => {
            const { data: postId, meta } = JSON.parse(response);

            if (currentUserId === meta.userID) {
                return null;
            }

            dispatch(postsActions.removePost(postId));
        });

        socket.on('like', (response) => {
            const { data: { postID, userID }, meta } = JSON.parse(response);

            if (currentUserId === meta.userID) {
                return null;
            }

            if (meta.action === 'like') {
                const liker = getState()
                    .users.find((user) => user.get('id') === userID)
                    .delete('avatar');

                dispatch(
                    postsActions.likePost(liker, postID)
                );

                return null;
            }

            dispatch(
                postsActions.unlikePost(userID, postID)
            );

        });
    },
});
