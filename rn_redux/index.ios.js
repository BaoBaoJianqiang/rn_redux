/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import {Provider} from 'react-redux';
import ControlPanel from './views/ControlPanel';
import store from './Store.js';

export default class rn_redux extends Component {

  render() {
    return (
      <Provider store={store}>
        <ControlPanel/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('rn_redux', () => rn_redux);
