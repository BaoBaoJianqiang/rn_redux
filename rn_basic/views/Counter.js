import React, { Component, PropTypes } from 'react';

import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

    this.state = {
      count: props.initValue
    }
  }

  onClickIncrementButton() {
    this.updateCount(true);
  }

  onClickDecrementButton() {
    this.updateCount(false);
  }

  updateCount(isIncrement) {
    const previousValue = this.state.count;
    const newValue = isIncrement ? previousValue + 1 : previousValue - 1;

    this.setState({count: newValue})
    this.props.onUpdate(newValue, previousValue)
  }

  render() {
    const {caption} = this.props;

    return (
      <View style={{flex: 0, flexDirection: 'row'}}>    
        <TouchableHighlight onPress={this.onClickIncrementButton}>
          <Text>+</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onClickDecrementButton}>
          <Text>-</Text>
        </TouchableHighlight>

        <Text>{caption} count: {this.state.count}</Text>
      </View>
    );
  }
}
