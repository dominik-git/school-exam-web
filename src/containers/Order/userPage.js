/*eslint-disable */
import React from "react";
import { SubmissionError, change } from "redux-form/immutable";
import { connect } from "react-redux";
import { isRequired } from "../../services/validation";
import { returnPostObjectPromise } from "../../services/orderServices";
import { StyledTitle, StyledText, StyledWrapper } from "./styles";
import OrderForm from "./userComponents/form";
import moment from "moment";
// import "./styles.css";

class OrderPageForUser extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showModal: false,
      date: moment(),
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
  }

  handleChange(date) {
    // console.log(date);
    this.setState({ date });
    // this.props.seTimeField(date.format("DD.MM.YYYY"));
  }
  async handlePostOrder(orderObject) {
    try {
      console.log(orderObject);
      await returnPostObjectPromise("/api/order", orderObject);
    } catch (error) {
      console.log("error", error);
    }
  }

  handleSubmitOrder(values) {
    const time = moment(values.get("time")).format("MM.DD.YYYY");
    const {
      name,
      surname,
      emailAddress,
      phoneNumber,
      serviceName,
      problemDescription,
      carBrand,
      carModel,
      yearOfMade,
    } = values.toJS();
    const errors = {};

    if (isRequired(surname)) {
      errors.surname = "fieldIsRequired";
    }

    if (isRequired(emailAddress)) {
      errors.emailAddress = "fieldIsRequired";
    }
    if (isRequired(phoneNumber)) {
      errors.phone = "fieldIsRequired";
    }
    if (Object.keys(errors).length > 0) {
      console.log("asdasd", errors);
      throw new SubmissionError(errors);
    } else {
      const orderObject = JSON.stringify({
        name,
        surname,
        emailAddress,
        phoneNumber,
        serviceName,
        problemDescription,
        carBrand,
        carModel,
        yearOfMade,
        time,
      });
      this.handlePostOrder(orderObject);
    }
  }

  render() {
    return (
      <StyledWrapper>
        <StyledTitle>Online rezervacia</StyledTitle>
        <StyledText>
          Sme radi, že ste sa rozhodli využiť naše služby. Objednajte si prosím termín na Vami vyžadovaný servisný úkon.
          Po uzatvorení formuláru, Vás bude jeden z naších technikov kontaktovať a dohodne presný termín i čas potrebný
          pre úkon.
        </StyledText>
        <OrderForm onSubmit={this.handleSubmitOrder} />
      </StyledWrapper>
    );
  }
}
// export default connect(null, {
//   change("orderForm", "time", value)
// })(OrderPageForUser);
// export default OrderPageForUser;
export default OrderPageForUser;
