import React from "react";
import { StyledPaginationWrapper, StyledNumberWrapper, StyledNumber } from "./styles";
import ReviewComponent from "../../components/ReviewComponent";

const todosPerPage = 3;
const numberToShow = 5;

class PaginationComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlePaginationNumber = this.handlePaginationNumber.bind(this);
  }

  handleClick(event) {
    this.setState({ currentPage: Number(event.target.id) });
  }

  moveLeft(position) {
    if (position === 0) {
      console.log("hide left icon");
    }
    console.log("move left");
    this.setState({ currentPage: this.currentPage - 1 });
  }
  moveRight(position, lenght) {
    if (position === lenght) {
      console.log("hide right icon");
    }
    console.log("moveRight");
    this.setState({ currentPage: this.currentPage + 1 });
  }
  handlePaginationNumber(firstIndex, LastIndex, ArrayOfNumbers) {
    const currentNumbers = ArrayOfNumbers.slice(firstIndex, LastIndex);
    console.log(currentNumbers);
    return currentNumbers;
  }

  render() {
    const { arrayOfReviews } = this.props;
    const { currentPage } = this.state;
    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;

    const currentTodos = arrayOfReviews.slice(indexOfFirstTodo, indexOfLastTodo);
    if (currentTodos.lenght === 0) {
      this.setState({ currentPage: currentPage - 1 });
    }
    const renderTodos = currentTodos.map(value => (
      <ReviewComponent
        message={value.message}
        nickName={value.nickName}
        rating={value.rating}
        deleteReview={this.props.deleteReview}
        approveReview={this.props.approveReview}
        id={value.id}
        key={value.id}
      />
    ));

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(arrayOfReviews.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }
    // const slicedPageNumber = this.handlePaginationNumber()
    const renderPageNumbers = pageNumbers.map(number => (
      <StyledNumber key={number} id={number} onClick={this.handleClick} currentPage={currentPage}>
        {number}
      </StyledNumber>
    ));

    return (
      <StyledPaginationWrapper>
        {renderTodos}
        <StyledNumberWrapper>{renderPageNumbers}</StyledNumberWrapper>
      </StyledPaginationWrapper>
    );
  }
}
export default PaginationComponent;
