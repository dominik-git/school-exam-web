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
  StyledApprove,
  StyledIcon,
  StyledLeftSide,
  StyledRightSide,
} from "./styles";

const ReviewComponent = props => {
  console.log(props);
  const { nickName, message, deleteReview, approveReview, id, rating, role, date } = props;
  const userIcon = <i className="fa fa-user fa-3x" aria-hidden="true" />;
  if (role === "admin") {
    return (
      <StyledWrapper>
       <StyledLeftSide>
       <StyledIcon>{userIcon}</StyledIcon>
     </StyledLeftSide>
     <StyledRightSide>
       <StyledHeader>
         <ReactStars count={5} size={24} color2={"#ffd700"} edit={false} value={rating} />
         <StyledNick>{nickName}</StyledNick>
         <StyledDate>{date}</StyledDate>
       </StyledHeader>
       <StyledMessage>{message}</StyledMessage>
     </StyledRightSide>
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
  } else if (role === "user") {
    return (
      <StyledWrapper>
        <StyledHeader>
          <StyledIcon>{userIcon}</StyledIcon>
          <StyledNick>{nickName}</StyledNick>
          <StyledDate>{date}</StyledDate>
          <ReactStars count={5} size={24} color2={"#ffd700"} edit={false} value={rating} />
        </StyledHeader>
        <StyledMessage>{message}</StyledMessage>
      </StyledWrapper>
    );
  }
  return <div />;
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
