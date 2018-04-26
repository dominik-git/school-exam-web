import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import { StyledFormLabel, StyledFormGroupWrapper, StyledTextArea } from "./styles";
import Text from "../Text";

const FormTextarea = ({ color, placeholder, input, label, meta: { error }, border }) => (
  // eslint-disable-line
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
    <StyledTextArea {...input} placeholder={placeholder} cols="30" rows="5" color={color} border={border} />
    {error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

FormTextarea.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  color: PropTypes.string,
  border: PropTypes.bool
};
FormTextarea.defaultProps = {
  label: "",
  placeholder: "",
  color: "white",
  border:false
};

export default FormTextarea;
