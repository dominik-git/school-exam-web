import React from "react";
import { Field, reduxForm } from "redux-form/immutable";
import PropTypes from "prop-types";
import { ReduxFormInputWithIcon, FormTextAreaWithIcon, FormInput } from "../../../components/FormElements/index";
import { StyledFormWrapper, StyledSubmitButton } from "../styles";

const AdminContactForm = props => {
  const { handleSubmit, isEditable } = props;

  return (
    <StyledFormWrapper>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="serviceName"
            label="Nazov servisu"
            component={FormInput}
            type="text"
            placeholder="Bavaria S.R.O"
            readOnly={isEditable}
          />
        </div>
        <div>
          <Field
            name="address"
            label="Adresa"
            component={FormInput}
            type="text"
            placeholder="Kosice, Priemyselna 4"
            readOnly={isEditable}
          />
        </div>
        <div>
          <Field
            name="emailAddress"
            label="Emailova adresa"
            component={FormInput}
            type="email"
            placeholder="bavaria@bavaria.sk"
            readOnly={isEditable}
          />
        </div>
        <div>
          <Field
            name="number1"
            label="Mobil 1"
            component={FormInput}
            type="text"
            placeholder="0908 000 000"
            readOnly={isEditable}
          />
        </div>
        <div>
          <Field
            name="number2"
            label="Mobil 2"
            component={FormInput}
            type="text"
            placeholder="0908 111 222"
            readOnly={isEditable}
          />
        </div>
        <div>
          <label htmlFor={"openDay"}>Otvaraci den</label>
          <div>
            <Field name="openDay" component="select">
              <option value="PO">PO</option>
              <option value="UT">UT</option>
              <option value="STR">STR</option>
              <option value="ST">ST</option>
              <option value="PIA">PIA</option>
              <option value="SO">SO</option>
              <option value="NE">NE</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor={"closeDay"}>Zatvaraci den</label>
          <div>
            <Field name="closeDay" component="select">
              <option value="PO">PO</option>
              <option value="UT">UT</option>
              <option value="STR">STR</option>
              <option value="ST">ST</option>
              <option value="PIA">PIA</option>
              <option value="SO">SO</option>
              <option value="NE">NE</option>
            </Field>
          </div>
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
  form: "adminContactForm",
})(AdminContactForm);

AdminContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
