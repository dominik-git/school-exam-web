import { fromJS } from "immutable";
import { createSelector } from "reselect";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

export function logIn() {
  console.log("log in");
  return {
    type: LOG_IN,
  };
}
export function logOut() {
  return {
    type: LOG_OUT,
  };
}

const initialState = fromJS({
  isAdmin: false,
});

export function adminReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN:
      return state.set("isAdmin", true);
    case LOG_OUT:
      return state.set("isAdmin", false);
    default:
      return state;
  }
}

const selectAdminStore = () => state => state.get("adminPermision");
export const getStateIsAdmin = () => createSelector(selectAdminStore(), substate => substate.get("isAdmin"));
