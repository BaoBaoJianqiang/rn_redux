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

import ControlPanel from './views/ControlPanel';

export default class rn_redux extends Component {

  render() {
    return (
      <ControlPanel/>
    );
  }
}

AppRegistry.registerComponent('rn_redux', () => rn_redux);
