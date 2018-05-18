import React from "react";
import { StyledPaginationWrapper, StyledNumberWrapper, StyledNumber } from "./styles";
import ReviewComponent from "../../components/ReviewComponent";
import { Row, Col } from "react-bootstrap";

// const todosPerPage = 3;

class PaginationComponent extends React.Component {
  static renderActualElements(splitedArray, elementForRender) {
    const elementsForShow = splitedArray.map((value) => elementForRender);

    return elementsForShow;
  }

  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    // this.handlePaginationNumber = this.handlePaginationNumber.bind(this);
  }

  handleClick(event) {
    this.setState({ currentPage: Number(event.target.id) });
  }


  render() {
    const { arrayOfReviews, todosPerPage } = this.props;
    const { currentPage } = this.state;
    // Logic for displaying current todos
    const indexOfLastElementOnThePage = currentPage * todosPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - todosPerPage;
    const splitedArray = arrayOfReviews.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage);

    const renderReviews = splitedArray.map(value => (
      <Col xs={12} md={8} lg={4} mdOffset={2} lgOffset={0}>
      <ReviewComponent
        message={value.message}
        nickName={value.nickName}
        rating={value.rating}
        date={value.date}
        deleteReview={this.props.deleteReview}
        approveReview={this.props.approveReview}
        id={value.id}
        key={value.id}
        role={this.props.role}
      />
      </Col>
    ));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(arrayOfReviews.length / todosPerPage); i += 1) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
      <StyledNumber key={number} id={number} onClick={this.handleClick} currentPage={currentPage}>
        {number}
      </StyledNumber>
    ));

    return (
      <StyledPaginationWrapper>
        <Row className="show-grid">
          {renderReviews}
          {/* {PaginationComponent.renderActualElements(splitedArray, this.props.children)} */}
        </Row>
        <StyledNumberWrapper>{renderPageNumbers}</StyledNumberWrapper>
      </StyledPaginationWrapper>
    );
  }
}
export default PaginationComponent;
