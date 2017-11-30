import React from "react";
import Proptypes from "prop-types";
import { StyledWrapper, StyledMessage, StyledEmail, StyledDelete, StyledApprove } from "./styles";

const ReviewComponent = props => {
  console.log(props);
  const { nickName, message, date, deleteReview, approveReview, id } = props;
  return (
    <StyledWrapper>
      <StyledMessage>{message}</StyledMessage>
      <StyledEmail>{nickName}</StyledEmail>
      <StyledDelete
        onClick={() => {
          deleteReview(id);
        }}
      />
      <StyledApprove
        onClick={() => {
          approveReview(id);
        }}
      />
    </StyledWrapper>
  );
};
export default ReviewComponent;
