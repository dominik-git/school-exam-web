import React from "react";
import PropTypes from "prop-types";
import { LabelWrapper } from "./styles";

const propTypes = {
  children: PropTypes.node.isRequired,
};
const contextTypes = {
  controlId: PropTypes.string,
};

export default function FormLabel(props, context) {
  const controlId = context.controlId;
  const { children } = props;
  return (
    <LabelWrapper>
      <label htmlFor={controlId}>{children}</label>
    </LabelWrapper>
  );
}
FormLabel.propTypes = propTypes;
FormLabel.contextTypes = contextTypes;
