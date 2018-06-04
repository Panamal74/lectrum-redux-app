// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    SignupForm
} from '../components';

import { authActions } from "../bus/authentication/actions";

const mapStateToProps = (state) => {
    return {
        isAuthFetching: state.ui.get('isAuthFetching'),
    };
};

const mapActionToProps = {
    signup: authActions.signup,
};

@connect(
    mapStateToProps,
    mapActionToProps,
)
export default class Signup extends Component {
    render () {
        const { isAuthFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpinning = { isAuthFetching } />
                <Navigation />
                <Catcher>
                    <SignupForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
