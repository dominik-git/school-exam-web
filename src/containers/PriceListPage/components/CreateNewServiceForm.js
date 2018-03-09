import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon } from "../../../components/FormElements/index";
import { StyledHiddenField, StyledForm } from "./styles";
import ImagePickerWrapper from "../../../components/ImagePicker/ImagePickerWrapper";
import Button from "../../../components/Button";
import ButtonGroup from "../../../components/ButtonGroup";

const CreateNewService = props => {
  const { handleSubmit, images, selectImage } = props;
  const passwordIcon = <i className="fa fa-unlock" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Pridaj novu sluzbu</h3>
      <div>
        <ImagePickerWrapper job="create" form="createNewService" />
      </div>
      <StyledHiddenField>
        <Field
          name="serviceImage"
          label="asdas"
          component={ReduxFormInputWithIcon}
          type="text"
          icon={userIcon}
          placeholder=""
        />
      </StyledHiddenField>
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
      <ButtonGroup>
        <Button type="submit" blue>
          Vytvor
        </Button>
        <Button grey onClick={props.onCancel}>
          Cancel
        </Button>
      </ButtonGroup>
    </StyledForm>
  );
};

export default reduxForm({ form: "createNewService" })(CreateNewService);
