import { FETCH_PHOTO } from "../actions/index";

export default function(state = [], action) {
  console.log("action recieved", action);
  switch (action.type) {
    case FETCH_PHOTO:
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
      console.log("state", ...state);
  }
  return state;
}
