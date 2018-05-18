import { createSelector } from "reselect";

const selectPriceListReducer = () => state => state.get("priceListReducer");
export const getStateSelectedImage = () => createSelector(selectPriceListReducer(), substate => substate.get("selectedImage"));
