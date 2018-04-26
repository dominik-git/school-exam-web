import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import { StyledFormLabel, StyledFormGroupWrapper, StyledInput } from "./styles";
import Text from "../Text";

const FormInput = ({ color, placeholder, readOnly, input, label, type, meta: { error }, border, labelColor }) => (
  // eslint-disable-line
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`} labelColor={labelColor}>
      {label}
    </StyledFormLabel>
    <StyledInput {...input} type={type} placeholder={placeholder} readOnly={readOnly} border={border} color={color} />

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
  color: PropTypes.string,
  labelColor: PropTypes.string
};
FormInput.defaultProps = {
  color: "white",
  readOnly: false,
  placeholder: "",
  border: true,
  labelColor: "black"
};

export default FormInput;
