import { createSelector } from "reselect";

const selectAdminStore = () => state => state.get("roleReducer");
const getStateIsAdmin = () => createSelector(selectAdminStore(), substate => substate.get("isAdmin"));
export default getStateIsAdmin;
