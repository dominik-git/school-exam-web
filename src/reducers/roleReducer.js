import { fromJS } from "immutable";
import { LOG_IN, LOG_OUT } from "../const/const";

const initialState = fromJS({
  isAdmin: true
});

export function roleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return state.set("isAdmin", true);
    case LOG_OUT:
      return state.set("isAdmin", false);
    default:
      return state;
  }
}
