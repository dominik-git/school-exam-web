import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { FormInput, FormTextarea } from "../../../components/FormElements/index";
import { StyledHiddenField, StyledForm } from "./styles";
import ImagePickerWrapper from "../../../components/ImagePicker/ImagePickerWrapper";
import Button from "../../../components/Button";
import ButtonGroup from "../../../components/ButtonGroup";
import FormWrapper from "../../../components/FormWrapper";
import { StyledFormWrapper } from "../../ContactPage/styles";

const CreateNewService = props => {
  const { handleSubmit } = props;
  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <ImagePickerWrapper job="create" form="createNewService" />
        </div>
        <StyledHiddenField>
          <Field name="serviceImage" label="asdas" component={FormInput} type="text" placeholder="" />
        </StyledHiddenField>
        <div>
          <Field
            name="service"
            label="Nazov sluzby:"
            component={FormInput}
            type="text"
            placeholder="Vymena pneumatik"
            color="#eaeef0"
            border={false}
          />
        </div>
        <div>
          <Field
            name="description"
            label="Popis sluzby:"
            component={FormTextarea}
            type="text"
            placeholder=""
            color="#eaeef0"
            border={false}
          />
        </div>
        <div>
          <Field
            name="price"
            label="Cena:"
            component={FormInput}
            type="text"
            placeholder="20"
            color="#eaeef0"
            border={false}
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
    </FormWrapper>
  );
};

export default reduxForm({ form: "createNewService" })(CreateNewService);
