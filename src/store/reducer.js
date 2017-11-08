import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";

export default combineReducers({
  form: formReducer,
});

// return (state, action) => {
//   if (!isFSA(action)) {
//     console.warn(
//       `Action ${action.type} is not FSA compliant. For more info visit https://github.com/acdlite/flux-standard-action`,
//     );
//   }
//   return appReducer(state, action);
// };
