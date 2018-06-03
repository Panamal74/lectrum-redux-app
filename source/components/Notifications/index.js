// Core
import React from 'react';
import { connect } from 'react-redux';
import { notificationsActions } from '../../bus/notification/actions';

// Components
import Notification from '../../components/Notification';

const Notifications = ({ notifications, hideNotification }) =>
    notifications.map((notification) => (
        <Notification
            hideNotification = { hideNotification }
            key = { notification.id }
            { ...notification }
        />
    ));

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications,
    };
};

const mapActionsToProps = {
    hideNotification: notificationsActions.hideNotification,
};

export default connect(
    mapStateToProps,
    mapActionsToProps,
)(Notifications);
