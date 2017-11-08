import React from "react";
import PropTypes from "prop-types";
import StyledSpan from "./styles";

const propTypes = {
  children: PropTypes.node
};
const defaultProps = {
  children: null
};
const Text = props => <StyledSpan {...props}> {props.children} </StyledSpan>;

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;