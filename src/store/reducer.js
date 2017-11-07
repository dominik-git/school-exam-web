import { combineReducers } from "redux-immutable";
import { isFSA } from "flux-standard-action";
import { fromJS } from "immutable";
import { reducer as formReducer } from "redux-form/immutable";

const testReducerInitialState = fromJS({
  state: {},
});
function testReducer(state = testReducerInitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default function createReducer() {
  const appReducer = combineReducers({
    test: testReducer,
    form: formReducer,
  });

  return (state, action) => {
    if (!isFSA(action)) {
      console.warn(
        `Action ${action.type} is not FSA compliant. For more info visit https://github.com/acdlite/flux-standard-action`,
      );
    }
    return appReducer(state, action);
  };
}
