import { createSelector } from "reselect";

const contactDetailStore = () => state => state.get("contactDetailsReducer");

export const selectContactDetails = () =>
  createSelector(contactDetailStore(), substate => substate.get("contactDetails"));
