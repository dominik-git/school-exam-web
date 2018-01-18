import React from "react";
import { ToastContainer } from "react-toastify";
import { Col } from "react-bootstrap";
import { returnAllReviewsPromise, returnPromiseDeleteReview } from "../../services/ReviewServices";
import { infoNotification, errorNotification } from "../../services/toastServices";
import PaginationComponent from "../../components/PaginationComponent";
import { toastForReviewPage } from "../../const/toastMessages";
import ReviewComponent from "../../components/ReviewComponent";

class ReviewPageForAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviewsArray: [],
      arrayOfElements: [],
      reviewsToShow: null,
      currentPage: 1,
    };
    this.deleteReview = this.deleteReview.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
  }
  componentDidMount() {
    this.fetchAllReviews();
  }

  async fetchAllReviews() {
    try {
      const response = await returnAllReviewsPromise();
      this.setState({ allReviewsArray: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  async deleteReview(id) {
    try {
      await returnPromiseDeleteReview(id);
      const newArray = this.state.allReviewsArray.filter(value => value.id !== id);
      this.setState({ allReviewsArray: newArray });
      infoNotification(toastForReviewPage.succesfullDeleted);
    } catch (error) {
      errorNotification(toastForReviewPage.errorMeesage);
    }
  }
  handleSetCurrentPage(currentPage) {
    this.setState({ currentPage });
  }

  render() {
    const { currentPage, allReviewsArray } = this.state;
    const todosPerPage = 3;
    const indexOfLastElementOnThePage = currentPage * todosPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - todosPerPage;
    const splitedArray = allReviewsArray.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage);

    const renderReviews = splitedArray.map(value => (
      <Col xs={12} md={8} lg={4}>
        <ReviewComponent
          message={value.message}
          nickName={value.nickName}
          rating={value.rating}
          date={value.date}
          deleteReview={this.deleteReview}
          id={value.id}
          key={value.id}
          role={"admin"}
        />
      </Col>
    ));

    return (
      <div>
        {allReviewsArray.lenght !== 0 ? (
          <PaginationComponent
            arrayOfReviews={allReviewsArray}
            setCurrentPage={this.handleSetCurrentPage}
            todosPerPage={todosPerPage}
          >
            {renderReviews}
          </PaginationComponent>
        ) : null}
        <ToastContainer position="bottom-center" hideProgressBar />
      </div>
    );
  }
}

export default ReviewPageForAdmin;
