import React from "react";
import PropTypes from "prop-types";
import { StyledToastWrapper } from "./styles";

const ToastMessage = props => <StyledToastWrapper {...props}>{props.children}</StyledToastWrapper>;

export default ToastMessage;

ToastMessage.propTypes = {
  children: PropTypes.string.isRequired,
};
