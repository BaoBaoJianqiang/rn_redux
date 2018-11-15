import React from 'react';
import {connect} from 'react-redux';

import {
  View,
  Text,
  TouchableHighlight
} from 'react-native';

function Summary({value}) {
  return (
    <View>
      <Text>Total Count: {value}</Text>
    </View>
  );
}

function mapStateToProps(state) {
  let sum = 0;
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key];
    }
  }
  return {value: sum};
}


export default connect(mapStateToProps)(Summary);


