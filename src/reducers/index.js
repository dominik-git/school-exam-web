import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";
import { photoReducer } from "../containers/GalleryPage/ducks";
import { roleReducer } from "./roleReducer";
import { contactDetailsReducer } from "./contactDetailReducer";

const rootReducer = combineReducers({
  form: formReducer,
  photos: photoReducer,
  roleReducer,
  contactDetailsReducer,
});
export default rootReducer;
