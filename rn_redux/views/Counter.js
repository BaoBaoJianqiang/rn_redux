import React, { PropTypes } from 'react';
import * as Actions from '../Actions.js';
import {connect} from 'react-redux';

import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

function Counter({caption, onIncrement, onDecrement, value}) {
  return (
    <View style={{flex: 0, flexDirection: 'row'}}>    
        <TouchableHighlight onPress={onIncrement}>
          <Text>+++</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={onDecrement}>
          <Text>-</Text>
        </TouchableHighlight>

        <Text>{caption} count: {value}</Text>
    </View>
  );
}

function a(state, ownProps) {
  // console.log(state);
  // console.log(ownProps);
  return {
    value: state[ownProps.caption]
  }
}

function b(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption));
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption));
    }
  }
}

export default connect(a, b)(Counter);

