import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon, FormTextAreaWithIcon, FormInput } from "../../../components/FormElements/index";
import { StyledFormWrapper } from "../styles";
import Button from "../../../components/Button";

const ContactForm = props => {
  const { handleSubmit } = props;
  const addressIcon = <i className="far fa-envelope fa-2x" aria-hidden="true" />;
  const userIcon = <i className="far fa-user fa-2x" aria-hidden="true" />;
  const messageIcon = <i className="far fa-comment-alt fa-2x" aria-hidden="true" />;
  const phoneIcon = <i className="fas fa-mobile-alt fa-2x" aria-hidden="true" />;
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
          
          <Button type="submit">Odoslat</Button>
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
