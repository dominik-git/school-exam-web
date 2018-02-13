import { fromJS } from "immutable";
import {
  FETCH_CONTACT_DETAILS,
  FETCH_CONTACT_DETAILS_FAILED,
  FETCH_CONTACT_DETAILS_START_LOADING,
} from "../const/const";

const initialState = fromJS({
  contactDetails: {},
  error: false,
  isLoading: true,
});

export function contactDetailsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_CONTACT_DETAILS:
      return state.set("contactDetails", fromJS(action.payload)).set("isLoading", false);
    case FETCH_CONTACT_DETAILS_START_LOADING:
      return state.set("error", false).set("isLoading", true);
    case FETCH_CONTACT_DETAILS_FAILED:
      return state.set("error", true).set("isLoading", false);
    default:
      return state;
  }
}
