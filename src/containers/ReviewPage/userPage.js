import React from "react";
import { SubmissionError } from "redux-form/immutable";
import ReviewForm from "./userComponents/form";
import { isRequired } from "../../services/validation";
import { returnAllReviewsPromise, returnPromiseUploadReview } from "../../services/ReviewServices";
import { sucessfulNotification, errorNotification } from "../../services/toastServices";
import PaginationComponent from "../../components/PaginationComponent";
import ReviewComponent from "../../components/ReviewComponent";
import { StyledWrapper, StyledRow,StyledTitle,StyledFormOverlay,StyledIconWrapper,StyledIcon,StyledRewiesContainer,StyledAddReview } from "./styles";
import "./styles.css";
import ScrollTop from "../../components/ScrollTop";
import Loader from "../../components/Loader";



const itemsPerPage = 3;
class ReviewPageForUser extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviewsArray: [],
      rating: 0,
      currentPage: 1,
      addReview:false,
      isLoading:true
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.uploadReview = this.uploadReview.bind(this);
    this.ratingChanged = this.ratingChanged.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
    this.handleAddReviewOn = this.handleAddReviewOn.bind(this);
    this.handleAddReviewOff = this.handleAddReviewOff.bind(this);
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
      this.setState({ 
        allReviewsArray: response.data,
        isLoading:false
       });
    } catch (error) {
      console.log(error);
    }
  }
  handleSetCurrentPage(currentPage) {
    this.setState({ currentPage });
  }
  handleAddReviewOn() {
    console.log("on");
    this.setState({ addReview: true });
  }
  handleAddReviewOff() {
    this.setState({ addReview: false });
  }

  render() {
    const { currentPage, allReviewsArray, isLoading } = this.state;
    const indexOfLastElementOnThePage = currentPage * itemsPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - itemsPerPage;
    const splitedArray = allReviewsArray.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage);
    const reviews = splitedArray.map(item => (
      <ReviewComponent
        key={item.id}
        message={item.message}
        nickName={item.nickName}
        rating={item.rating}
        date={item.date}
        role="user"
      />
    )); 
    if (isLoading) {
      return <StyledWrapper><Loader/></StyledWrapper>;
    }
    return (
      <StyledWrapper>
        <StyledAddReview>
          <StyledTitle>Pridat Recenziu</StyledTitle>
          <ReviewForm
            onSubmit={this.handleSubmitForm}
            ratingChanged={this.ratingChanged}
            onCancel={this.handleAddReviewOff}
          />
        </StyledAddReview>
        <StyledRewiesContainer>
          <StyledTitle>Recenzie</StyledTitle>
          <StyledRow> {reviews} </StyledRow>
          <PaginationComponent
            arrayOfReviews={allReviewsArray}
            setCurrentPage={this.handleSetCurrentPage}
            todosPerPage={itemsPerPage}
          />
        </StyledRewiesContainer>
        <ScrollTop />
      </StyledWrapper>
    );
  }
}

export default ReviewPageForUser;
