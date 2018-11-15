import React, { Component } from 'react';

import {
  View,
  Text,
} from 'react-native';

import Counter from './Counter.js';
import Summary from './Summary.js';

export default class ControlPanel extends Component {
  render() {
    return (
      <View>
        <Text />
        <Text />
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <Summary />
      </View>
    );
  }
}
