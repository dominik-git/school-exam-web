import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon } from "../../../components/FormElements/index";
import { } from "./styles";
import ImagePicker from "../../../components/ImagePicker/ImagePicker";

const CreateNewService = (props) => {
  const { handleSubmit, images, selectImage } = props;
  const passwordIcon = <i className="fa fa-unlock" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <ImagePicker images={images} name="wheel" className="flaticon-oil" />
      </div>
      <div>
        <Field
          name="service"
          label="Nazov sluzby:"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={userIcon}
          placeholder=""
        />
      </div>
      <div>
        <Field
          name="description"
          label="Popis sluzby:"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={passwordIcon}
          placeholder=""
        />
      </div>
      <div>
        <Field
          name="price"
          label="Cena:"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={passwordIcon}
          placeholder=""
        />
      </div>
      <div>
        <button type="submit">Odoslat</button>
      </div>
    </form>
  );
}


// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "createNewService",
})(CreateNewService);
