import React from "react";
// import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import "react-select/dist/react-select.css";
import { StyledFormLabel, StyledFormGroupWrapper, StyledSelect } from "./styles";
import Text from "../Text";

const FormCheckBox = ({ readOnly, input, label, checkBoxValues, meta: { error } }) => (
  // eslint-disable-line
  <StyledFormGroupWrapper>
    <StyledFormLabel htmlFor={`${input.name}`}>{label}</StyledFormLabel>
    <div>
      <input {...input} type="checkbox" checked={input.value} value={input.data} />
    </div>
    {error && <Text warning>{error}</Text>}
  </StyledFormGroupWrapper>
);

FormCheckBox.propTypes = {
  input: PropTypes.object.isRequired, // eslint-disable-line
  label: PropTypes.string.isRequired,
  meta: PropTypes.object.isRequired, // eslint-disable-line
  readOnly: PropTypes.bool
};

export default FormCheckBox;
