import { createSelector } from "reselect";
import { fromJS } from "immutable";

const ALLOW_TO_EDIT = "ALLOW_TO_EDIT";
const FORBID_TO_EDIT = "FORBID_TO_EDIT";

export function allowEditing() {
  return {
    type: ALLOW_TO_EDIT,
  };
}

export function forbidEditing() {
  return {
    type: FORBID_TO_EDIT,
  };
}

const initialState = fromJS({
  isEdit: true,
});

export function contactPageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ALLOW_TO_EDIT:
      return state.set("isEdit", true);
    case FORBID_TO_EDIT:
      return state.set("isEdit", false);
    default:
      return state;
  }
}

const selectcontactPageStore = () => state => state.get("contactPageStates");
export const getStateIsEdit = () => createSelector(selectcontactPageStore(), substate => substate.get("isEdit"));
