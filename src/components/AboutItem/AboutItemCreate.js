import React from "react";
import { Field, reduxForm, reset } from "redux-form/immutable";
import PropTypes from "prop-types";
import { FormInput, FormTextarea, FileInput } from "../../components/FormElements/index";
import Button from "../../components/Button";
import { StyledForm } from "./styles";

const AboutItemCreate = props => {
  const { handleSubmit } = props;
  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <Field name="title" label="title" component={FormInput} type="text" />
      </div>
      <div>
        <Field name="photo" label="photo" component={FileInput} type="file" border={false} color="none" />
      </div>
      <div>
        <Field name="secondTitle" label="secondTitle" component={FormInput} type="text" />
      </div>
      <div>
        <Field name="description" label="description" component={FormTextarea} type="text" border />
      </div>
      <div>
        <Button type="submit" blue>
          Pridaj
        </Button>
      </div>
    </StyledForm>
  );
};

const afterSubmit = (result, dispatch) => dispatch(reset("createAboutItem"));
// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "createAboutItem",
  onSubmitSuccess: afterSubmit
})(AboutItemCreate);

AboutItemCreate.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
