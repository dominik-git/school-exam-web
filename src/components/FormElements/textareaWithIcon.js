import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import {
  StyledFormLabel,
  StyledFormGroupWrapper,
  StyledInputIconWrapper,
  StyledTextArea,
  StyledInputWrapper,
  StyledIcon,
} from "./styles";
import Text from "../Text";

const FormTextAreaWithIcon = ({ placeholder, input, icon, label, meta: { error } }) => (
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
    <StyledInputWrapper>
      <StyledInputIconWrapper>
        <StyledIcon> {icon}</StyledIcon>
      </StyledInputIconWrapper>
      <StyledTextArea {...input} placeholder={placeholder} cols="30" rows="5" />
    </StyledInputWrapper>
    {error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

FormTextAreaWithIcon.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  icon: PropTypes.element.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormTextAreaWithIcon;
