import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import './custom.css'
import { TestComponent } from './components/TestComponent';

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route path='/test' component={TestComponent} />
            </Layout>
        );
    }
}
