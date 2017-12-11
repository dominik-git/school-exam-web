import React from "react";
import Proptypes from "prop-types";
import ReactStars from "react-stars";
import { StyledWrapper, StyledMessage, StyledEmail, StyledDelete, StyledApprove } from "./styles";

const ReviewComponent = props => {
  console.log(props);
  const { nickName, message, date, deleteReview, approveReview, id, rating } = props;
  return (
    <StyledWrapper>
      <ReactStars count={5} size={24} color2={"#ffd700"} edit={false} value={rating} />
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
