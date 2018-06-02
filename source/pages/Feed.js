// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';

// Components
import { Spinner, Catcher, Posts } from 'components';

import { postsActions } from "../bus/posts/actions";

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            {
                fetchPosts: postsActions.fetchPosts,
            },
            dispatch,
        ),
    };
};

// 'http://i0.kym-cdn.com/entries/icons/original/000/000/774/lime-cat.jpg',
@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class Feed extends Component {
    static defaultProps = {
        isFeedFetching: false,
        profile:        fromJS({
            id:     '123',
            avatar:
                    'https://img00.deviantart.net/514e/i/2010/010/4/c/jakes_sully__s_eye_avatar_by_phodees.png',
            firstName: 'Cat',
        }),
        actions: {
            fetchPosts: () => {},
            fetchUsers: () => {},
            createPost: () => {},
        },
        // posts: [],
    };

    render () {
        const { actions, isFeedFetching, profile, posts } = this.props;

        return (
            <>
                <Spinner isSpinning = { isFeedFetching } />
                <Catcher>
                    <Posts actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Feed);
