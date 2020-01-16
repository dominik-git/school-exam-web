import React from "react";
import { StyledWrapper, StyledTitle, StyledImage, SecondTitle, StyledDescription, StyledDeleteIcon } from "./styles";

const AboutItem = props => (
  <StyledWrapper>
    <StyledTitle>{props.item.title}</StyledTitle>
    <StyledImage src={`data:image;base64,${props.item.photoData}`} />
    <SecondTitle>{props.item.secondTitle}</SecondTitle>
    <StyledDescription>{props.item.description}</StyledDescription>
    {props.deleteFunc ? (
      <StyledDeleteIcon
        onClick={() => {
          props.deleteFunc(props.item.id);
        }}
      >
        <i className="fas fa-times" />
      </StyledDeleteIcon>
    ) : null}
  </StyledWrapper>
);
export default AboutItem;
