import React from "react";
import { SubmissionError } from "redux-form/immutable";
import { ToastContainer } from "react-toastify";
import { Row, Col } from "react-bootstrap";
import ReviewForm from "./userComponents/form";
import { isRequired } from "../../services/validation";
import { returnAllReviewsPromise, returnPromiseUploadReview } from "../../services/ReviewServices";
import { sucessfulNotification, infoNotification, errorNotification } from "../../services/toastServices";
import Title from "../../components/Title";
import PaginationComponent from "../../components/PaginationComponent";
import ReviewComponent from "../../components/ReviewComponent";


const itemsPerPage = 6;
class ReviewPageForUser extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviewsArray: [],
      rating: 0,
      currentPage: 1,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.uploadReview = this.uploadReview.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
  }
  componentDidMount() {
    this.fetchReviews();
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
      await returnPromiseUploadReview(email, message, rating, date);
      sucessfulNotification("Recenzia uspesne odoslana");
      this.fetchReviews();
    } catch (error) {
      console.log(error);
      errorNotification("Odoslanie recenzie nebolo uspesne");
    }
  }

  async fetchReviews() {
    try {
      const response = await returnAllReviewsPromise();
      this.setState({ allReviewsArray: response.data });
    } catch (error) {
      console.log(error);
    }
  }
  handleSetCurrentPage(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    const { currentPage, allReviewsArray } = this.state;
    // const array = this.state.allReviewsArray;
    const indexOfLastElementOnThePage = currentPage * itemsPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - itemsPerPage;
    const splitedArray = allReviewsArray.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage);
    const reviews = splitedArray.map((item, index) => (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
        <ReviewComponent
         message={item.message}
        nickName={item.nickName}
        rating={item.rating}
        date={item.date}
        role="user"
        />
      </Col>
    ));
    return (
      <div>
        <Row className="show-grid">
          <Col xs={12} md={6} lg={6}>
            <Title>Napiste hodnotenie</Title>
            <ReviewForm onSubmit={this.handleSubmitForm} ratingChanged={this.ratingChanged} />
          </Col>
        </Row>
        <Row className="show-grid">
          <Title>Recenzie</Title>
          <PaginationComponent
            arrayOfReviews={allReviewsArray}
            setCurrentPage={this.handleSetCurrentPage}
            todosPerPage={itemsPerPage}
          >
            {reviews}
          </PaginationComponent>
        </Row>
        <ToastContainer position="bottom-center" hideProgressBar />
      </div>
    );
  }
}

export default ReviewPageForUser;
