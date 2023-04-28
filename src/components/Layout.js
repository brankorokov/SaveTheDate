import React, { Component } from 'react';
import { Home } from './Home';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <Home />
            </div>
        );
    }
}
