import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon, FormTextAreaWithIcon, FormInput } from "../../../components/FormElements/index";
import { StyledFormWrapper, StyledSubmitButton } from "../styles";

const ContactForm = props => {
  const { handleSubmit } = props;
  const addressIcon = <i className="fa fa-envelope fa-2x" aria-hidden="true" />;
  const userIcon = <i className="fa fa-user fa-2x" aria-hidden="true" />;
  const messageIcon = <i className="fa fa-commenting fa-2x" aria-hidden="true" />;
  const phoneIcon = <i className="fa fa-phone fa-2x" aria-hidden="true" />;
  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="nickName"
            label=""
            component={ReduxFormInputWithIcon}
            type="text"
            icon={userIcon}
            placeholder="Meno"
          />
        </div>
        <div>
          <Field
            name="emailAddress"
            label=""
            component={ReduxFormInputWithIcon}
            type="email"
            icon={addressIcon}
            placeholder="E-mailova adresa"
          />
        </div>
        <div>
          <Field
            name="phone"
            label=""
            component={ReduxFormInputWithIcon}
            type="text"
            icon={phoneIcon}
            placeholder="0908 000 000"
          />
        </div>
        <div>
          <Field
            name="message"
            label=""
            component={FormTextAreaWithIcon}
            icon={messageIcon}
            placeholder="Napiste nam"
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
  form: "contactForm",
})(ContactForm);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
