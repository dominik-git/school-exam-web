import { fromJS } from "immutable";
import { createSelector } from "reselect";
import { returnFetchPhotosPromise } from "../../services/axiosServices";

const FETCH_PHOTO_SUCCESSFUL = "FETCH_GALLERY_PHOTOS_SUCCESSFULLY";
const FETCH_PHOTO_FAILED = "FETCH_GALLERY_PHOTOS_FAILED";
const TEST_CONST = "TEST_CONST";

// Action creators
export function fetchPhotos(payload) {
  return {
    type: FETCH_PHOTO_SUCCESSFUL,
    payload,
  };
}
export function testAction(payload) {
  return {
    type: TEST_CONST,
    payload,
  };
}
export function failedFetchPhotos() {
  return {
    type: FETCH_PHOTO_FAILED,
  };
}

export const asyncAction = () => async dispatch => {
  try {
    const response = await returnFetchPhotosPromise();
    console.log(response);
    dispatch(fetchPhotos(response.data));
  } catch (err) {
    console.log(err);
  }
};

// state initialization
const initialState = fromJS({
  galleryPhotos: [],
  test: "test",
  error: false,
});
// Reducers
export function photoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_PHOTO_SUCCESSFUL:
      return state.set("galleryPhotos", fromJS(action.payload));
    case TEST_CONST:
      return state.set("test", fromJS(action.payload));
    case FETCH_PHOTO_FAILED:
      return state.set("error", true);
    default:
      return state;
  }
}

const selectMyGalleryPage = () => state => state.get("photos");
export const selectMyPhotos = () => createSelector(selectMyGalleryPage(), substate => substate.get("galleryPhotos"));
export const selectError = () => createSelector(selectMyGalleryPage(), substate => substate.get("error"));
export const selectTest = () => createSelector(selectMyGalleryPage(), substate => substate.get("test"));
