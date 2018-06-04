import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { hot } from 'react-hot-loader';

import Private from './Private';
import Public from './Public';

import { uiActions } from "../bus/ui/actions";

import { Loading } from "../components";
import { joinSocketChannel } from "../init/socket";
import { socketActions } from "../bus/socket/actions";
import { socket } from '../init/socket';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authentication.get('isAuthenticated'),
        isInitialised:   state.ui.get('isInitialised'),
    };
};

const mapActionToProps = {
    initialise: uiActions.initialise,
    ...socketActions,
};

@hot(module)
@withRouter
@connect(mapStateToProps, mapActionToProps)
export default class Main extends Component {
    // static defaultProps = {
    //     isInitialized: false,
    // };

    componentDidMount () {
        const { initialise, listenConnection } = this.props;

        initialise();
        joinSocketChannel();
        listenConnection();
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialised, listenPosts } = this.props;

        return isInitialised ? (
            <Switch>
                {/*{!isInitialised}*/}
                {isAuthenticated && <Private listenPosts = { listenPosts } />}
                <Public />
            </Switch>
        ) : (
            <Loading />
        );
    }
}
