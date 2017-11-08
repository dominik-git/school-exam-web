import React from "react";
import noop from "lodash/noop";
import PropTypes from "prop-types";
import { FormControlWrapper, StyledInput } from "./styles";

export default function FormControl(props, context) {
  const controlId = context.controlId;
  const { typeComponent: Component, inputRef, type, ...rest } = props;
  return (
    <FormControlWrapper>
      <StyledInput inputRef={inputRef} type={type} id={controlId} {...rest} />
    </FormControlWrapper>
  );
}

FormControl.propTypes = {
  typeComponent: PropTypes.element,
  inputRef: PropTypes.func,
  type: PropTypes.string,
};
FormControl.defaultProps = {
  typeComponent: undefined,
  type: "text",
  inputRef: noop,
};
FormControl.contextTypes = {
  controlId: PropTypes.string,
};
