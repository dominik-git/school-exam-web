import { fromJS } from "immutable";
import { FETCH_CONTACT_DETAILS } from "../const/const";

const initialState = fromJS({
  contactDetails: {},
});

export function contactDetailsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_CONTACT_DETAILS:
      return state.set("contactDetails", fromJS(action.payload));
    default:
      return state;
  }
}
