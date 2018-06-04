// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    LoginForm
} from '../components';

import { authActions } from "../bus/authentication/actions";

const mapStateToProps = (state) => {
    return {
        isAuthFetching: state.ui.get('isAuthFetching'),
    };
};

const mapActionToProps = {
    login: authActions.login,
};

@connect(
    mapStateToProps,
    mapActionToProps,
)
export default class Login extends Component {
    render () {
        const { isAuthFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isAuthFetching } />
                <Navigation />
                <Catcher>
                    <LoginForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
