import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { FormInput } from "../../components/FormElements/index";
import FormWrapper from "../../components/FormWrapper";
import Button from "../../components/Button";
import { StyledFormWrapper } from "./styles";

const LoginForm = props => {
  const { handleSubmit } = props;
  const passwordIcon = <i className="fa fa-unlock" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;

  return (
    <FormWrapper>
      <StyledFormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <Field
              name="username"
              label="Prihlasovacie meno:"
              component={FormInput}
              type="text"
              placeholder="Prihlasovacie meno"
            />
          </div>
          <div>
            <Field name="password" label="Heslo:" component={FormInput} type="password" placeholder="Heslo" />
          </div>
          <div>
            <Button type="submit" blue>
              Prihlasit sa
            </Button>
          </div>
        </form>
      </StyledFormWrapper>
    </FormWrapper>
  );
};

// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "loginForm"
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
