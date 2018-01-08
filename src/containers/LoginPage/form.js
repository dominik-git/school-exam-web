import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon } from "../../components/FormElements/index";
import { StyledFormWrapper, StyledSubmitButton } from "./styles";

const LoginForm = props => {
  const { handleSubmit } = props;
  const passwordIcon = <i className="fa fa-unlock" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;

  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="username"
            label="Prihlasovacie meno:"
            component={ReduxFormInputWithIcon}
            type="text"
            icon={userIcon}
            placeholder=""
          />
        </div>
        <div>
          <Field
            name="password"
            label="Heslo:"
            component={ReduxFormInputWithIcon}
            type="password"
            icon={passwordIcon}
            placeholder=""
          />
        </div>
        <div>
          <StyledSubmitButton type="submit">Odoslat</StyledSubmitButton>
        </div>
      </form>
    </StyledFormWrapper>
  );
};

// create new, "configured" function
export default reduxForm({
  // a unique name for the form
  form: "loginForm",
})(LoginForm);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
