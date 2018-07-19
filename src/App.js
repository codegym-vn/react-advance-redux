import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './reducers/index';
import ServiceAction from './actions/serviceCallAction';

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ServiceAction />
            </Provider>
        );
    }
}

