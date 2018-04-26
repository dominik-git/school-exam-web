import React from "react";
import {
  StyledIconWrapper,
  StyledWrapper,
  StyledItemHeader,
  StyledItemFooter,
  StyledItemBody,
  StyledTitle,
} from "./styles";
import Button from "../Button";
import ButtonGroup from "../ButtonGroup";


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
  </StyledWrapper>
);
export default ServiceItem;
