import React from "react";
import { StyledWrapper, StyledText, StyledBackgound } from "./styles.js";

const Subheader = ({ image, text }) => {
  return (
    <StyledWrapper >
      <StyledBackgound image={image} />
      <StyledText>{text}</StyledText>
    </StyledWrapper>
  );
};

export default Subheader;
