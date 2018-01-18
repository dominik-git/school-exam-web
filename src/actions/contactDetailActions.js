import { FETCH_CONTACT_DETAILS } from "../const/const";

export function fetchContactDetailsAction(payload) {
  return {
    type: FETCH_CONTACT_DETAILS,
    payload,
  };
}

// export const fetchContactDetailData = () => async dispatch => {
//   try {
//     const response = await returnContentDetailPromise();
//     console.log(response);
//     dispatch(fetchContactDetailsAction(response.data));
//   } catch (err) {
//     console.log(err);
//   }
// };
