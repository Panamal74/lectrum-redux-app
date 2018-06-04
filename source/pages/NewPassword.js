// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    NewPasswordForm
} from '../components';

import { uiActions } from "../bus/ui/actions";
import { profileActionsAsync } from "../bus/profile/saga/asyncActions";

const mapStateToProps = (state) => {
    return {
        isProfileFetching: state.ui.get('isProfileFetching'),
        isPasswordEditing: state.ui.get('isPasswordEditing'),
    };
};

const mapActionsToProps = {
    updateProfileAsync:      profileActionsAsync.updateProfileAsync,
    setPasswordEditingState: uiActions.setPasswordEditingState,
};

@connect(mapStateToProps, mapActionsToProps)
export default class NewPassword extends Component {
    render () {
        const { isProfileFetching } = this.props;

        return (
            <>
                <Notifications />
                <Spinner isSpining = { isProfileFetching } />
                <Navigation />
                <Catcher>
                    <NewPasswordForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
