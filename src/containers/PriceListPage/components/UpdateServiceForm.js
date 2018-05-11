import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import { FormInput, FormTextarea } from "../../../components/FormElements/index";
import ButtonGroup from "../../../components/ButtonGroup";
import Button from "../../../components/Button";
import { StyledFormWrapper } from "../../ContactPage/styles";

import ImagePickerWrapper from "../../../components/ImagePicker/ImagePickerWrapper";
import { StyledHiddenField, StyledForm } from "./styles";

const UpdateService = props => {
  const { handleSubmit, form, serviceImage, cancel } = props;
  const passwordIcon = <i className="fa fa-unlock" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;
  return (
    <StyledFormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Edituj sluzbu</h3>
        <div>
          <span>Obrazok sluzby</span>
          <ImagePickerWrapper job="update" form={form} serviceImage={serviceImage} />
        </div>
        <StyledHiddenField>
          <Field name="serviceImage" label="asdas" component={FormInput} type="text" icon={userIcon} placeholder="" />
        </StyledHiddenField>
        <div>
          <Field
            name="service"
            label="Nazov sluzby:"
            component={FormInput}
            type="text"
            icon={userIcon}
            placeholder=""
          />
        </div>
        <div>
          <Field
            name="description"
            label="Popis sluzby:"
            component={FormTextarea}
            type="text"
            icon={passwordIcon}
            placeholder=""
            border
          />
        </div>
        <div>
          <Field name="price" label="Cena:" component={FormInput} type="text" icon={passwordIcon} placeholder="" />
        </div>
        <div>
          <ButtonGroup>
            <Button type="submit" blue>
              UPRAVIT
            </Button>
            <Button grey onClick={props.cancel}>
              SPAT
            </Button>
          </ButtonGroup>
        </div>
      </StyledForm>
    </StyledFormWrapper>
  );
};

// create new, "configured" function
// export default reduxForm({})(UpdateService);
export default reduxForm()(UpdateService);
