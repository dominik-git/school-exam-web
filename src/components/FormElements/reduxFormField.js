import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import {
  StyledFormLabel,
  StyledFormGroupWrapper,
  StyledInput,
  StyledTextArea,
  ReduxFormInputWithIcon,
  ReduxFormInput,
} from "./styles";
import Text from "../Text";

const ReduxFormField = ({ input, inputIcon, label, type, meta: { touched, error } }) => (
  // eslint-disable-line
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>

    {type === "text" || type === "email" ? <ReduxFormInput {...input} type={type} placeholder={label} /> : null}
    {type === "textarea" ? <StyledTextArea {...input} placeholder={label} cols="30" rows="5" /> : null}
    {error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

ReduxFormField.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string, PropTypes.element)]).isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  type: PropTypes.string.isRequired,
};

export default ReduxFormField;
