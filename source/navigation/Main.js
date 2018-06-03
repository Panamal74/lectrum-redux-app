import React, { Component } from 'react';
import { Switch } from 'react-router';
import { hot } from 'react-hot-loader';

import Private from './Private';
import Public from './Public';

@hot(module)
export default class Main extends Component {
    static defaultProps = {
        isAuthenticated: true,
    };

    render () {
        const { isAuthenticated } = this.props;

        return (
            <Switch>
                {isAuthenticated && <Private />}
                <Public />
            </Switch>
        );
    }
}
