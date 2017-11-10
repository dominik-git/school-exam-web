import React from "react";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form/immutable";
import GoogleMapComponent from "../../components/GoogleMap";
import ContactForm from "./form";
import ContactInfo from "./contactInfo";
import { isRequired, isEmail, isLength } from "../../services/validation";
import { StyledContactPageWrapper } from "./styles";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: true,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  /*eslint-disable */
  async handleSubmitForm(values) {
    const { firstName, lastName, email, textarea } = values.toJS();
    console.log(textarea);
    const errors = {};
    //validate first name field
    if (isRequired(firstName)) {
      errors.firstName = "is required";
      console.log(errors.firstName);
    } else if (isLength(firstName, 3)) {
      errors.firstName = "must be longer";
      console.log(errors.firstName);
    }
    if (Object.keys(errors).length > 0) {
      throw new SubmissionError(errors);
    }
    return errors;
  }

  render() {
    //marker position "priemyselna 2"
    const MarkerPosition = { lat: 48.7290529, lng: 21.2764167 };
    const CenterPosition = { lat: 48.7290529, lng: 21.2764167 };
    return (
      <StyledContactPageWrapper>
        <GoogleMapComponent
          MarkerPosition={MarkerPosition}
          CenterPosition={CenterPosition}
          isMarkerShown={this.state.isMarkerShown}
        />
        <ContactForm onSubmit={this.handleSubmitForm} />
        <ContactInfo />
      </StyledContactPageWrapper>
    );
  }
}
function mapStateToProps() {
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
