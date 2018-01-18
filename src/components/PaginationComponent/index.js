import React from "react";
import { Row } from "react-bootstrap";
import { StyledPaginationWrapper, StyledNumberWrapper, StyledNumber } from "./styles";

class PaginationComponent extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.setCurrentPage(Number(event.target.id));
  }

  render() {
    const { arrayOfReviews, todosPerPage } = this.props;
    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(arrayOfReviews.length / todosPerPage); i += 1) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => (
      <StyledNumber key={number} id={number} onClick={this.handleClick}>
        {number}
      </StyledNumber>
    ));

    return (
      <StyledPaginationWrapper>
        <Row className="show-grid">{this.props.children}</Row>
        <StyledNumberWrapper>{renderPageNumbers}</StyledNumberWrapper>
      </StyledPaginationWrapper>
    );
  }
}
export default PaginationComponent;
