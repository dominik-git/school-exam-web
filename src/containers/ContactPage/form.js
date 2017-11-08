import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import ReduxFormField from "../../components/FormElements";
import { StyledFormWrapper } from "./styles";

const ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Field name="firstName" label="firstName" component={ReduxFormField} type="text" />
        </div>
        <div>
          <Field name="lastName" label="lastName" component={ReduxFormField} type="text" />
        </div>
        <div>
          <Field name="email" label="email" component={ReduxFormField} type="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </StyledFormWrapper>
  );
};

// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "contact",
})(ContactForm);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
