import React from "react";
import StyledButton from "./styles";

const Button = props => (
  <StyledButton {...props} type={props.type}>
    {props.children}
  </StyledButton>
);

export default Button;
