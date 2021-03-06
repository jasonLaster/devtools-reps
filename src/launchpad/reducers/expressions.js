const constants = require("../constants");
const Immutable = require("immutable");

let storedExpressions;
try {
  storedExpressions = JSON.parse(
    window.localStorage.getItem(constants.LS_EXPRESSIONS_KEY)
  );
} catch (e) {}

const initialState = storedExpressions
  ? Immutable.fromJS(storedExpressions)
  : Immutable.Map();

function update(state = initialState, action) {
  const { type, value, key } = action;

  switch (type) {
    case constants.ADD_EXPRESSION:
      let newState = state.set(key, Immutable.Map(value));
      window.localStorage.setItem(
        constants.LS_EXPRESSIONS_KEY, 
        JSON.stringify(newState.toJS())
      );
      return newState;

    case constants.CLEAR_EXPRESSIONS:
      window.localStorage.removeItem(constants.LS_EXPRESSIONS_KEY);
      return state.clear();

    case constants.SHOW_RESULT_PACKET:
      return state.mergeIn([key], {showPacket: true});

    case constants.HIDE_RESULT_PACKET:
      return state.mergeIn([key], {showPacket: false});
  }

  return state;
}

module.exports = update;
