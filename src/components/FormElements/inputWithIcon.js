import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import {
  StyledFormLabel,
  StyledFormGroupWrapper,
  StyledInput,
  StyledInputIconWrapper,
  StyledInputWrapper,
  StyledIcon,
} from "./styles";
import Text from "../Text";

const ReduxFormInputWithIcon = ({ placeholder, input, icon, label, type, meta: { error } }) => (
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
    <StyledInputWrapper>
      <StyledInputIconWrapper>
        <StyledIcon> {icon}</StyledIcon>
      </StyledInputIconWrapper>
      <StyledInput {...input} type={type} placeholder={placeholder} />
    </StyledInputWrapper>
    {error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

ReduxFormInputWithIcon.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  type: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default ReduxFormInputWithIcon;
