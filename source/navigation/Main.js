import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, withRouter } from 'react-router';
import { hot } from 'react-hot-loader';

import Private from './Private';
import Public from './Public';

import { uiActions } from "../bus/ui/actions";

import { Loading } from "../components";

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.authentication.get('isAuthenticated'),
        isInitialised:   state.ui.get('isInitialised'),
    };
};

const mapActionToProps = {
    initialise: uiActions.initialise,
};

@hot(module)
@withRouter
@connect(mapStateToProps, mapActionToProps)
export default class Main extends Component {
    // static defaultProps = {
    //     isInitialized: false,
    // };

    componentDidMount () {
        const { initialise } = this.props;

        initialise();
    }

    render () {
        const { isAuthenticated, isInitialised } = this.props;

        return isInitialised ? (
            <Switch>
                {isAuthenticated && <Private />}
                <Public />
            </Switch>
        ) : (
            <Loading />
        );
    }
}
