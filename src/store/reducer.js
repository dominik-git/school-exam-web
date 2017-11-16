import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";
import { photoReducer } from "../containers/GalleryPage/ducks";

export default combineReducers({
  form: formReducer,
  photos: photoReducer,
});
