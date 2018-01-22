import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import "react-select/dist/react-select.css";
import { StyledFormLabel, StyledFormGroupWrapper, StyledSelect } from "./styles";
import Text from "../Text";

const FormSelect = ({ readOnly, input, label, options, meta: { error } }) => (
  // eslint-disable-line
  <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
    <StyledSelect {...input} disabled={readOnly}>
      {options.map(item => <option value={item.value} key={item.value}>{item.label}</option>)}
    </StyledSelect>
    {error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

FormSelect.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  readOnly: PropTypes.bool.isRequired,
};

export default FormSelect;
