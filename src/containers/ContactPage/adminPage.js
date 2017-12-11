import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form/immutable";
import GoogleMapComponent from "../../components/GoogleMap";
import ContactForm from "./form";
import ContactInfo from "./contactInfo";
import { isRequired } from "../../services/validation";
import { StyledContactPageWrapper } from "./styles";
import { seletectContent } from "../../components/LanguageSwitcher/ducks";
import { sendContactFormular } from "../../services/axiosServices";

// const nameOfFields = this.props.content.get("contactForm");
class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: true,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  /*eslint-disable */

  render() {
    const nameOfFields = this.props.content.get("contactForm");
    //marker position "priemyselna 2"
    const MarkerPosition = { lat: 48.7290529, lng: 21.2764167 };
    const CenterPosition = { lat: 48.7290529, lng: 21.2764167 };
    return (
      <StyledContactPageWrapper>
        {/* <GoogleMapComponent
          MarkerPosition={MarkerPosition}
          CenterPosition={CenterPosition}
          isMarkerShown={this.state.isMarkerShown}
        /> */}
        <ContactInfo />
      </StyledContactPageWrapper>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  content: seletectContent(),
});

export default connect(mapStateToProps)(ContactPage);
