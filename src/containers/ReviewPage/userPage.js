import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SubmissionError } from "redux-form/immutable";
import { ToastContainer } from "react-toastify";
import { Row, Col } from "react-bootstrap";
import ReviewForm from "./userComponents/form";
import { isRequired } from "../../services/validation";
import { returnApprovedReviewsPromise, returnPromiseUploadReview } from "../../services/ReviewServices";
import { sucessfulNotification, infoNotification, errorNotification } from "../../services/toastServices";
import PaginationComponent from "../../components/PaginationComponent";
import Title from "../../components/Title";
import Subheader from "../../components/SubHeader";
import bmwImage from "../../assets/bmw7.jpg";


class ReviewPageForUser extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviewsArray: [],
      rating: 0,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.uploadReview = this.uploadReview.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.fetchApprovedReviews = this.fetchApprovedReviews.bind(this);
  }
  componentDidMount() {
    this.fetchApprovedReviews();
  }

  ratingChanged(newRating) {
    this.setState({ rating: newRating });
  }
  generateCurrentDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0!
    let yyyy = today.getFullYear();
    if (dd < 10) {
      dd = `0${dd}`
    }
    if (mm < 10) {
      mm = `0${mm}`
    }
    today = `${mm}/${dd}/${yyyy}`;
    return today;
  }

  handleSubmitForm(values) {
    const { nickName, message } = values.toJS();
    const { rating } = this.state;
    const errors = {};
    const date = this.generateCurrentDate().toString();
    console.log(date);
    if (isRequired(message)) {
      errors.message = "fieldIsRequired";
    }
    if (Object.keys(errors).length > 0) {
      throw new SubmissionError(errors);
    } else {
      this.uploadReview(nickName, message, rating, date);
    }
  }

  async uploadReview(email, message, rating, date) {
    try {
      const response = await returnPromiseUploadReview(email, message, rating, date);
      sucessfulNotification("Recenzia uspesne odoslana");
    } catch (error) {
      console.log(error);
      errorNotification("Odoslanie recenzie nebolo uspesne");
    }
  }

  async fetchApprovedReviews() {
    try {
      const response = await returnApprovedReviewsPromise();
      this.setState({ allReviewsArray: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const array = this.state.allReviewsArray;
    return (
      <div>
        <Subheader image={bmwImage} text={"RECENZIE"} />

        <Row className="show-grid">
          <Col xs={12} md={6} lg={6}>
            <Title>Ohodnotte nas</Title>
            <ReviewForm onSubmit={this.handleSubmitForm} ratingChanged={this.ratingChanged} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} md={12} lg={12}>
            <Title>Recenzie</Title>
            {array.lenght !== 0 ? <PaginationComponent arrayOfReviews={array} role={"user"} /> : null}
          </Col>
        </Row>
        <ToastContainer position="bottom-center" hideProgressBar />
      </div>
    );
  }
}

export default ReviewPageForUser;
