import React from "react";
import { fromJS,update } from "immutable";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SubmissionError } from "redux-form/immutable";
import { seletectContent } from "../../components/LanguageSwitcher/ducks";
import ReviewForm from "./form";
import { isRequired } from "../../services/validation";
import { 
  returnAllReviewsPromise,
  returnApprovedReviewsPromise,
  returnPromiseUploadReview,
  returnPromiseDeleteReview,
  returnPromiseApproveReview} from "../../services/ReviewServices";
import ReviewComponent from "../../components/ReviewComponent";

class ReviewPage extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviewsArray: [],
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.approveReview = this.approveReview.bind(this);
    this.uploadReview = this.uploadReview.bind(this);
  }
  componentDidMount() {
    this.fetchAllReviews();
  }

  async handleSubmitForm(values) {
    const errorMessages = this.props.content.get("errors");
    const { nickName, message } = values.toJS();
    console.log(nickName);
    const errors = {};
    if (isRequired(message)) {
      errors.message = errorMessages.get("fieldIsRequired");
    }
    if (Object.keys(errors).length > 0) {
      throw new SubmissionError(errors);
    } else {
      this.uploadReview(nickName, message);
    }
  }

  async fetchAllReviews() {
    try {
      const response = await returnAllReviewsPromise();
      this.setState({ allReviewsArray: response.data });
      console.log("data", response.data);
    } catch (err) {
      console.log(err);
    }
  }

  async uploadReview(email,message){
    try{
      const response = await returnPromiseUploadReview(email,message);
      console.log("succes upload review");
    } catch(error){
      console.log("not usccessful upload review",error);
    }
  }

  async approveReview(id) {
    try{
      const response = await returnPromiseApproveReview(id);
      console.log("successful approved id ",id);
    } catch(error){
      console.log("not usccessful approved",id, error);
    }
  }
  async deleteReview(id) {
    try{
      const response = await returnPromiseDeleteReview(id)
      console.log("successful delete review", id);
    } catch(error){
      console.log("not successful delete", id,error);
    }
  }

  async fetchApprovedReviews(){
    try{
      const response = await returnApprovedReviewsPromise();
      console.log("succesfull download approved review", response.data);
    } catch(error){
      console.log("not successful download approved review");
    }
  }


  render() {
    const nameOfFields = this.props.content.get("reviewForm");
    const reviewsElemet = this.state.allReviewsArray.map(value => (
      <ReviewComponent
        message={value.message}
        nickName={value.nickName}
        deleteReview={this.deleteReview}
        approveReview={this.approveReview}
        id={value.id}
        key={value.id}
      />
    ));
    return (
      <div>
        <ReviewForm onSubmit={this.handleSubmitForm} nameOfFields={nameOfFields} />
        {reviewsElemet}
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  content: seletectContent(),
});

export default connect(mapStateToProps)(ReviewPage);
