import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-stars";
import {
  StyledWrapper,
  StyledMessage,
  StyledDate,
  StyledNick,
  StyledHeader,
  StyledDelete,
  StyledDeleteIcon,
  StyledIcon,
  StyledLeftSide,
  StyledRightSide,
  StyledReviewFotter,
} from "./styles";

const ReviewComponent = props => {
  const { nickName, message, rating, date } = props;
  const userIcon = <i className="fas fa-user-circle fa-4x" aria-hidden="true" />;
  return (
    <StyledWrapper className="effect">
      <StyledIcon>{userIcon}</StyledIcon>
      {/* <StyledDate>{date}</StyledDate> */}
      <StyledMessage>{message}</StyledMessage>
      <StyledReviewFotter>
        <StyledNick>{nickName}</StyledNick>
        <ReactStars count={5} size={28} color2={"#ffd700"} edit={false} value={rating} />
      </StyledReviewFotter>
    </StyledWrapper>
  );
};

ReviewComponent.propTypes = {
  nickName: PropTypes.string,
  message: PropTypes.string,
  deleteReview: PropTypes.func,
  approveReview: PropTypes.func,
  id: PropTypes.string,
  rating: PropTypes.number,
  role: PropTypes.string,
  date: PropTypes.string,
};

export default ReviewComponent;
