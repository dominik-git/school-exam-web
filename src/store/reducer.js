import { combineReducers } from "redux-immutable";
import { reducer as formReducer } from "redux-form/immutable";
import { photoReducer } from "../containers/GalleryPage/ducks";
import { languageReducer } from "../components/LanguageSwitcher/ducks";
import { adminReducer } from "../containers/ReturnAdminOrUserPage/ducks";
import { contactPageReducer } from "../containers/ContactPage/ducks";

export default combineReducers({
  form: formReducer,
  photos: photoReducer,
  content: languageReducer,
  adminPermision: adminReducer,
  contactPageStates: contactPageReducer,
});
