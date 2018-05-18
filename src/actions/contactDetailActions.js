import {
  FETCH_CONTACT_DETAILS,
  FETCH_CONTACT_DETAILS_FAILED,
  FETCH_CONTACT_DETAILS_START_LOADING,
} from "../const/const";
import { returnContentDetailPromise } from "../services/ContactPageServices";

function fetchContactDetailsAction(payload) {
  return {
    type: FETCH_CONTACT_DETAILS,
    payload,
  };
}

function fetchContactDataFailedAction() {
  return {
    type: FETCH_CONTACT_DETAILS_FAILED,
  };
}

function fetchContactDataStartLoading() {
  return {
    type: FETCH_CONTACT_DETAILS_START_LOADING,
  };
}

const fetchContactDetailDataAction = () => async dispatch => {
  try {
    const response = await returnContentDetailPromise();
    dispatch(fetchContactDetailsAction(response.data[0]));
  } catch (err) {
    console.log(err);
    dispatch(fetchContactDataFailedAction());
  }
};

export default fetchContactDetailDataAction;
