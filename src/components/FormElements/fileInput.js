import React from "react";
import uniqueId from "lodash/uniqueId";
import PropTypes from "prop-types";
import { StyledFormLabel, StyledFormGroupWrapper, StyledInput } from "./styles";
import Text from "../Text";

const FileInput = ({ color, input, label, meta: { error }, border, labelColor }) => {
  delete input.value;
  // eslint-disable-line
  return (
    <StyledFormGroupWrapper controlId={uniqueId(`${input.name}`)}>
      <StyledFormLabel htmlFor={`${input.name}`} labelColor={labelColor}>
        {label}
      </StyledFormLabel>
      <StyledInput {...input} type="file" border={border} color={color} />

      {error && <Text warning>{error}</Text>}
    </StyledFormGroupWrapper>
  );
};

FileInput.propTypes = {
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
FileInput.defaultProps = {
  color: "white",
  readOnly: false,
  placeholder: "",
  border: true,
  labelColor: "black"
};

export default FileInput;
