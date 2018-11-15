import React, { Component, PropTypes } from 'react';

import store from '../Store.js';
import * as Actions from '../Actions.js';

import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getOwnState = this.getOwnState.bind(this);

    this.state = this.getOwnState();
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    };
  }

  onIncrement() {
    store.dispatch(Actions.increment(this.props.caption));
  }

  onDecrement() {
    store.dispatch(Actions.decrement(this.props.caption));
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) ||
      (nextState.value !== this.state.value);
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    const value = this.state.value;
    const {caption} = this.props;

    console.log(this.props);
    console.log(caption);

    return (
      <View style={{flex: 0, flexDirection: 'row'}}>    
        <TouchableHighlight onPress={this.onIncrement}>
          <Text>+</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.onDecrement}>
          <Text>-</Text>
        </TouchableHighlight>

        <Text>{caption} count: {value}</Text>
      </View>
    );
  }
}
