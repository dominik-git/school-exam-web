/*eslint-disable */
import React from "react";
import { SubmissionError, change } from "redux-form/immutable";
import { connect } from "react-redux";
import { isRequired } from "../../services/validation";
import { returnPostObjectPromise } from "../../services/orderServices";
import { StyledTitle, StyledText, StyledWrapper, StyledContent } from "./styles";
import { sucessfulNotification, errorNotification } from "../../services/toastServices";
import Form from "./userComponents/form";
import moment from "moment";
import Axios from "axios";
import "../../assets/flaticons/flaticon.css";

class OrderPageForUser extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showModal: false,
      date: moment(),
      serviceItems: [],
    };
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmitOrder = this.handleSubmitOrder.bind(this);
  }

  componentDidMount() {
    this.fetchServices();
  }
  handleChange(date) {
    // console.log(date);
    this.setState({ date });
    // this.props.seTimeField(date.format("DD.MM.YYYY"));
  }
  async fetchServices() {
    try {
      const response = await Axios.get("/pricelist");
      this.setState({ serviceItems: response.data });
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  async handlePostOrder(orderObject) {
    try {
      console.log(orderObject);
      await returnPostObjectPromise("/order", orderObject);
      sucessfulNotification("Objednavka bola uspesne odoslana");
    } catch (error) {
      console.log("error", error);
      errorNotification("Objednavku sa nepodarilo odoslat, pracujeme na vyrieseni problemu");
    }
  }

  parseObjectValues(obj) {
    const serviceItems = [...objOfCheckboxes.keys()].map(id => ({ id }));

    return serviceItems;
  }

  handleSubmitOrder(values) {
    const time = moment(values.get("time")).format("MM.DD.YYYY");

    const {
      name,
      surname,
      emailAddress,
      phoneNumber,
      problemDescription,
      carBrand,
      carModel,
      yearOfMade,
    } = values.toJS();
    const errors = {};

    if (isRequired(surname)) {
      errors.surname = "Pole je povinne!";
    }

    if (isRequired(emailAddress)) {
      errors.emailAddress = "Pole je povinne!";
    }
    if (isRequired(phoneNumber)) {
      errors.phoneNumber = "Pole je povinne!";
    }
    if (Object.keys(errors).length > 0) {
      console.log("asdasd", errors);
      throw new SubmissionError(errors);
    } else {
      let objOfCheckboxes = {};
      let serviceItems = [];
      if (values.get("serviceItems") !== undefined) {
        objOfCheckboxes = values.get("serviceItems");
        serviceItems = [...objOfCheckboxes.keys()].map(id => ({ id: parseInt(id) }));
      }
      const orderObject = JSON.stringify({
        name,
        surname,
        emailAddress,
        phoneNumber,
        serviceItems,
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
        <StyledContent>
          <StyledTitle>ONLINE REZERVACIA</StyledTitle>
          <StyledText>
            Sme radi, že ste sa rozhodli využiť naše služby. Objednajte si prosím termín na Vami vyžadovaný servisný
            úkon. Po uzatvorení formuláru, Vás bude jeden z naších technikov kontaktovať a dohodne presný termín i čas
            potrebný pre úkon.
          </StyledText>
          <Form onSubmit={this.handleSubmitOrder} serviceItems={this.state.serviceItems} />
        </StyledContent>
      </StyledWrapper>
    );
  }
}
// export default connect(null, {
//   change("orderForm", "time", value)
// })(OrderPageForUser);
// export default OrderPageForUser;
export default OrderPageForUser;
