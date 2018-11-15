import React, { Component } from 'react';

import store from '../Store.js';

import {
  View,
  Text
} from 'react-native';

export default class Summary extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = this.getOwnState();
    console.log(this.state);
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  getOwnState() {
    const state = store.getState();
    let sum = 0;
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key];
      }
    }

    return { sum: sum };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum;
  }

  componentDidMount() {
    store.subscribe(this.onChange);
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange);
  }

  render() {
    const sum = this.state.sum;
    return (
      <View>
        <Text>Total Count: {sum}</Text>
      </View>
    );
  }
}


