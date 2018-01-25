import React from "react";
import { ToastContainer } from "react-toastify";
import { Col } from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css";
import { returnAllReviewsPromise, returnPromiseDeleteReview } from "../../services/ReviewServices";
import { infoNotification, errorNotification } from "../../services/toastServices";
import PaginationComponent from "../../components/PaginationComponent";
import { toastForReviewPage } from "../../const/toastMessages";
import ReviewComponent from "../../components/ReviewComponent";
import DecisionModal from "../../components/DecisionModal";
import { StyledMessageCell, StyledDeleteCell, StyledWrapper } from "./styles";
import "./styles.css";


class ReviewPageForAdmin extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviewsArray: [],
      arrayOfElements: [],
      reviewsToShow: null,
      currentPage: 1,
      isLoading: true,
      showModal: false,
    };
    this.deleteReview = this.deleteReview.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
    this.deleteCell = this.deleteCell.bind(this);

  }
  componentDidMount() {
    this.fetchAllReviews();
  }

  async fetchAllReviews() {
    try {
      const response = await returnAllReviewsPromise();
      this.setState({
        allReviewsArray: response.data,
        isLoading: false
      });
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
  deleteCell(cell, row) {
    console.log("row", row);
    console.log("cell", cell);
    return (
      <StyledDeleteCell
        onClick={() => {
          this.refs.modal.openModal(),
            this.refs.modal.passValue(row.id)
        }}
      >
        <i className="fa fa-times fa-2x" aria-hidden="true" />
      </StyledDeleteCell>
    );
  }
  messageCell(cell, row) {
    return (
      <StyledMessageCell>{row.message}</StyledMessageCell>
    )
  }
  ratingCell(cell, row) {
    return (
      <div>{row.rating} / 5</div>
    )
  }


  render() {
    const { allReviewsArray, isLoading } = this.state;
    const options = {
      sizePerPageList: [
        { text: '5', value: 5 },
        { text: '10', value: 10 }
      ]
    };
    if (isLoading) {
      return <div>Loading</div>;
    }

    return (
      <StyledWrapper>
        <BootstrapTable
          data={allReviewsArray}
          striped
          hover
          pagination={true}
          options={options}
        >
          <TableHeaderColumn isKey dataField='nickName' dataSort={true} filter={{ type: 'TextFilter', delay: 300 }} >Meno</TableHeaderColumn>
          <TableHeaderColumn dataField='date' dataSort={true}>Datum</TableHeaderColumn>
          <TableHeaderColumn dataField='message' dataFormat={this.messageCell}>Sprava</TableHeaderColumn>
          <TableHeaderColumn dataField='rating' dataFormat={this.ratingCell} dataSort={true}>Hodnotenie</TableHeaderColumn>
          <TableHeaderColumn dataField='id' dataFormat={this.deleteCell}>delete</TableHeaderColumn>
        </BootstrapTable>
        <DecisionModal ref="modal" message="DELETE ROW?" acceptCall={this.deleteReview} />
        <ToastContainer position="bottom-center" hideProgressBar />
      </StyledWrapper>
    );
  }
}

export default ReviewPageForAdmin;
