import React, { Component } from 'react';
import { TestComponent } from './TestComponent';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <TestComponent />
            </div>
        );
    }
}
