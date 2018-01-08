import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SubmissionError } from "redux-form/immutable";
import { ToastContainer } from "react-toastify";
import { Row, Col } from "react-bootstrap";
import { seletectContent } from "../../components/LanguageSwitcher/ducks";
import { isRequired } from "../../services/validation";
import {
  returnAllReviewsPromise,
  returnApprovedReviewsPromise,
  returnPromiseUploadReview,
  returnPromiseDeleteReview,
  returnPromiseApproveReview} from "../../services/ReviewServices";
import ReviewComponent from "../../components/ReviewComponent";
import { sucessfulNotification, infoNotification, errorNotification } from "../../services/toastServices";
import PaginationComponent from "../../components/PaginationComponent";


class ReviewPageForAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviewsArray: [],
      rating:0
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.approveReview = this.approveReview.bind(this);
    this.uploadReview = this.uploadReview.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.fetchApprovedReviews = this.fetchApprovedReviews.bind(this);
  }
  componentDidMount() {
    this.fetchAllReviews();
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }

  async handleSubmitForm(values) {
    const { nickName, message } = values.toJS();
    const { rating } = this.state;
    console.log(nickName);
    const errors = {};
    if (isRequired(message)) {
      errors.message = "fieldIsRequired";
    }
    if (Object.keys(errors).length > 0) {
      throw new SubmissionError(errors);
    } else {
      this.uploadReview(nickName, message, rating);
    }
  }

  async fetchAllReviews() {
    try {
      const response = await returnAllReviewsPromise();
      this.setState({ allReviewsArray: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  async uploadReview(email, message, rating) {
    const toastMessage = this.props.content.get("toastMessageForReviewPage");
    try {
      const response = await returnPromiseUploadReview(email, message, rating);
      this.fetchAllReviews();
      sucessfulNotification(toastMessage.get("successfullSendReview"));
    } catch (error) {
      console.log(error);
      errorNotification(toastMessage.get("notSuccessfulToast"));
    }
  }

  async approveReview(id) {
    const toastMessage = this.props.content.get("toastMessageForReviewPage");
    try {
      const response = await returnPromiseApproveReview(id);
      sucessfulNotification(toastMessage.get("successfulAprrove"));
    } catch (error) {
      errorNotification(toastMessage.get("notSuccessfulToast"));
    }
  }
  async deleteReview(id) {
    const toastMessage = this.props.content.get("toastMessageForReviewPage");
    try {
      const response = await returnPromiseDeleteReview(id);
      const newArray = this.state.allReviewsArray.filter(value => value.id !== id);
      this.setState({ allReviewsArray: newArray });
      infoNotification(toastMessage.get("successfullyDeletedReview"));
    } catch (error) {
      errorNotification(toastMessage.get("notSuccessfulToast"));
    }
  }

  async fetchApprovedReviews() {
    try {
      const response = await returnApprovedReviewsPromise();
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const nameOfFields = this.props.content.get("reviewForm");
    const array = this.state.allReviewsArray;
    const reviewsElements = this.state.allReviewsArray.map(value => (
      <ReviewComponent
        message={value.message}
        nickName={value.nickName}
        rating={value.rating}
        deleteReview={this.deleteReview}
        approveReview={this.approveReview}
        id={value.id}
        key={value.id}
      />
    ));
    return (
      <div>
        <ToastContainer position="bottom-center" hideProgressBar />
        {array.lenght !== 0 ? (
          <PaginationComponent
            arrayOfReviews={array}
            deleteReview={this.deleteReview}
            approveReview={this.approveReview}
            role={"admin"} />)
            : null
        }
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  content: seletectContent(),
});

export default connect(mapStateToProps)(ReviewPageForAdmin);
