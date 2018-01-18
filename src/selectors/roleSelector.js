import { createSelector } from "reselect";

const selectAdminStore = () => state => state.get("roleReducer");
export const getStateIsAdmin = () => createSelector(selectAdminStore(), substate => substate.get("isAdmin"));
