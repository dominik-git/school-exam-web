import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon } from "../../../components/FormElements/index";
import ButtonGroup from "../../../components/ButtonGroup";
import Button from "../../../components/Button";
import ImagePickerWrapper from "../../../components/ImagePicker/ImagePickerWrapper";
import { StyledHiddenField, StyledForm } from "./styles";

const UpdateService = props => {
  const { handleSubmit, form, serviceImage, cancel } = props;
  const passwordIcon = <i className="fa fa-unlock" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <h3>Edituj sluzbu</h3>
      <div>
        <span>Obrazok sluzby</span>
        <ImagePickerWrapper job="update" form={form} serviceImage={serviceImage} />
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
      <div>
        <ButtonGroup>
          <Button type="submit" blue>
            Odoslat
          </Button>
          <Button grey onClick={props.cancel}>
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </StyledForm>
  );
};

// create new, "configured" function
// export default reduxForm({})(UpdateService);
export default reduxForm()(UpdateService);
