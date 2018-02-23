import React from "react";
import {
  StyledIconWrapper,
  StyledWrapper,
  StyledItemHeader,
  StyledItemFooter,
  StyledItemBody,
  StyledTitle,
} from "./styles.js";

const ServiceItem = props => (
  <StyledWrapper>
    <StyledItemHeader>
      <StyledIconWrapper>
        <span className={props.item.serviceImage} />
      </StyledIconWrapper>
      <StyledTitle>{props.item.service}</StyledTitle>
    </StyledItemHeader>
    <StyledItemBody>{props.item.description}</StyledItemBody>
    <StyledItemFooter>cena od: {props.item.price}€</StyledItemFooter>
  </StyledWrapper>
);
export default ServiceItem;
