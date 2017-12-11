import { fromJS } from "immutable";
import { createSelector } from "reselect";

const SET_ADMIN_TOKEN = "SET_ADMIN_TOKEN";

export function storeAdminToken(payload) {
  return {
    type: SET_ADMIN_TOKEN,
    payload,
  };
}

const initialState = fromJS({
  isAdmin: true,
});

export function adminReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_ADMIN_TOKEN:
      return state.set("isAdmin", action.payload);
    default:
      return state;
  }
}

const selectAdminStore = () => state => state.get("adminPermision");
export const getStateIsAdmin = () => createSelector(selectAdminStore(), substate => substate.get("isAdmin"));
