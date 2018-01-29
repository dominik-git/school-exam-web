import { SET_IMAGE_FROM_IMAGE_PICKER } from "../const/const";

export function setImageFromImagePicker(payload) {
  return {
    type: SET_IMAGE_FROM_IMAGE_PICKER,
    payload,
  };
}