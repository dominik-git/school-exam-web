import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import { StyledFormLabel, StyledFormGroupWrapper, StyledInput } from "./styles";
import Text from "../Text";

const FormInput = ({ placeholder, readOnly, input, label, type, meta: { error }, border }) => (
  // eslint-disable-line
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
    <StyledInput {...input} type={type} placeholder={placeholder} readOnly={readOnly} border={border} />
    {error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

FormInput.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  type: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  placeholder: PropTypes.string,
  border: PropTypes.bool,
};

export default FormInput;
