import { fromJS } from "immutable";
import { createSelector } from "reselect";
import api from "../../data/api";

const SWITCH_LANGUAGE = "SWITCH_LANGUAGE";

export function switchLanguage(payload) {
  return {
    type: SWITCH_LANGUAGE,
    payload,
  };
}

const initialState = fromJS({
  content: api.getContent("en"),
});

export function languageReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return state.set("content", fromJS(api.getContent(action.payload)));
    default:
      return state;
  }
}

const seletectReducer = () => state => state.get("content");
export const seletectContent = () => createSelector(seletectReducer(), substate => substate.get("content"));
