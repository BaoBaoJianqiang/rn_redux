import * as ActionTypes from './ActionTypes.js';

export default (state, action) => {
  const {counterCaption} = action;

  switch (action.type) {
    case ActionTypes.INCREMENT:
    console.log(counterCaption);
    console.log([counterCaption]);
    console.log(state);
    console.log({...state, [counterCaption]: state[counterCaption] + 1});
      return {...state, [counterCaption]: state[counterCaption] + 1};
    case ActionTypes.DECREMENT:
      return {...state, [counterCaption]: state[counterCaption] - 1};
    default:
      return state
  }
}
