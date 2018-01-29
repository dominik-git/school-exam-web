import { fromJS } from "immutable";
import { SET_IMAGE_FROM_IMAGE_PICKER } from "../const/const";

const initialState = fromJS({
  selectedImage: "",
});

export function priceListReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_IMAGE_FROM_IMAGE_PICKER:
      return state.set("selectedImage", action.payload);
    default:
      return state;
  }
}

