import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import { StyledFormLabel, StyledFormGroupWrapper, StyledInput } from "./styles";
import Text from "../Text";

const ReduxFormField = ({ input, label, type, meta: { touched, error } }) => (
  // eslint-disable-line
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
    <StyledInput {...input} type={type} placeholder={label} />
    {touched && error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

ReduxFormField.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string, PropTypes.element)]).isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  type: PropTypes.string.isRequired,
};

export default ReduxFormField;
