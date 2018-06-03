// Core
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';

// Components
import { Spinner, Catcher, Posts, Notifications } from '../components';

import { postsActions } from "../bus/posts/actions";
// import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
    // debugger;
    //
    return {
        isPostsFetching: state.ui.get('isPostsFetching'),
        posts:           state.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    // debugger;
    //
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
        profile: fromJS({
            id:     '123',
            avatar:
                    'https://img00.deviantart.net/514e/i/2010/010/4/c/jakes_sully__s_eye_avatar_by_phodees.png',
            firstName: 'Pasha',
        }),
        actions: {
            fetchPosts: () => {},
            // fetchUsers: () => {},
            createPost: () => {},
        },
    };

    // componentDidMount () {
    //     debugger;
    // }

    render () {
        const { actions, isPostsFetching, profile, posts } = this.props;

        // debugger;
        //
        return (
            <>
                <Spinner isSpinning = { isPostsFetching } />
                <Notifications />
                <Catcher>
                    <Posts actions = { actions } posts = { posts } profile = { profile } />
                </Catcher>
            </>
        );
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Feed);
