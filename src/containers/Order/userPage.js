import React from "react";
import { isRequired } from "../../services/validation";
import { SubmissionError } from "redux-form/immutable";
import {} from "./styles";
import OrderForm from "./userComponents/form";
// import "./styles.css";

class OrderPageForUser extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showModal: false,
    };
    // this.deleteReview = this.deleteReview.bind(this);
    // this.deleteCell = this.deleteCell.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    // this.fetchAllReviews();
  }
  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  async handleSubmitOrder(values) {
    const {
       name, 
       surname, 
       emailAddress, 
       phone,
       service,
       problem,
       brandOfCar,
       modelOfCar,
       yearOfMade,
       timeForOrder
      } = values.toJS();
console.log(values.toJS());
    const errors = {};
    if (isRequired(surname)) {
      errors.surname = "fieldIsRequired";
    }

    if (isRequired(emailAddress)) {
      errors.emailAddress = "fieldIsRequired";
    }
    if (isRequired(phone)) {
      errors.phone = "fieldIsRequired";
    }
    if (Object.keys(errors).length > 0) {
      throw new SubmissionError(errors);
    } else {
      try {
        //  await returnSaveContentDetailPromise(values.toJS());
        // this.props.fetchContactDetailDataAction();
      } catch (error) {
        console.log("error", error);
      }
    }

  }

 

  render() {
   
  
    return (
      <div>
        <OrderForm onSubmit={this.handleSubmitOrder} />
      </div>
    );
  }
}

export default OrderPageForUser;
