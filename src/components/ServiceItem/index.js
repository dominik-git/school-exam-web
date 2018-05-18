import React from "react";
import {
  StyledIconWrapper,
  StyledWrapper,
  StyledItemHeader,
  StyledCost,
  StyledItemBody,
  StyledTitle,
  StyledContent,
  StyleTitleWrapper
} from "./styles";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";

const ServiceItem = props => (
  <StyledWrapper>
    <StyledIconWrapper>
      <span className={props.item.serviceImage} />
    </StyledIconWrapper>
    <StyledContent>
      <StyleTitleWrapper>
        <StyledTitle>{props.item.service}</StyledTitle>
        <StyledCost>cena od: {props.item.price}€</StyledCost>
      </StyleTitleWrapper>
      <StyledItemBody>{props.item.description}</StyledItemBody>
      {props.isAdmin ? (
      <ButtonGroup>
        <Button blue onClick={props.edit}>
          Edit
        </Button>
        <Button
          grey
          onClick={() => {
            props.onDelete(props.item.id);
          }}
        >
          delete
        </Button>
      </ButtonGroup>
    ) : null}
    </StyledContent>

    
  </StyledWrapper>
);
export default ServiceItem;
