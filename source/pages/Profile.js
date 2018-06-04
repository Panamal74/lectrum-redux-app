// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import {
    Notifications,
    Spinner,
    Navigation,
    Catcher,
    ProfileForm
} from '../components';

// import { uiActions } from "../bus/ui/actions";
import { profileActionsAsync } from "../bus/profile/saga/asyncActions";
import { uiActions } from "../bus/ui/actions";

const mapStateToProps = (state) => {
    return {
        profile:           state.profile,
        isProfileFetching: state.ui.get('isProfileFetching'),
        isProfileEditing:  state.ui.get('isProfileEditing'),
        isAvatarFetching:  state.ui.get('isAvatarFetching'),
    };
};

const mapActionToProps = {
    updateProfileAsync:     profileActionsAsync.updateProfileAsync,
    setProfileEditingState: uiActions.setProfileEditingState,
};

@connect(mapStateToProps, mapActionToProps)
export default class Profile extends Component {
    render () {
        return (
            <>
                <Notifications />
                <Spinner />
                <Navigation />
                <Catcher>
                    <ProfileForm { ...this.props } />
                </Catcher>
            </>
        );
    }
}
