import { fromJS } from "immutable";
import { createSelector } from "reselect";
import {
  returnContentPromise,
  returnUpdateContentPromise,
  returnSaveContentPromise,
} from "../services/ContactPageServices";

const FETCH_CONTACT_DETAILS = "FETCH_CONTACT_DETAILS";
const FETCH_CONTACT_DETAILS = "FETCH_CONTACT_DETAILS";
export function fetchContactDetails(payload) {
  return {
    type: FETCH_CONTACT_DETAILS,
    payload,
  };
}
