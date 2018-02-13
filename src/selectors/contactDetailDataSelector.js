import { createSelector } from "reselect";

const contactDetailStore = () => state => state.get("contactDetailsReducer");

export const selectContactDetails = () =>
  createSelector(contactDetailStore(), substate => substate.get("contactDetails"));
export const selectContactDetailsError = () => createSelector(contactDetailStore(), substate => substate.get("error"));
export const selectContactDetailLoading = () =>
  createSelector(contactDetailStore(), substate => substate.get("isLoading"));
