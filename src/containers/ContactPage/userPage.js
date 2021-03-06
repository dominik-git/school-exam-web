import React from "react";
import { Row, Col } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form/immutable";
import GoogleMapComponent from "../../components/GoogleMap";

import ContactInfo from "./userComponents/contactInfo";
import { isRequired } from "../../services/validation";
import { StyledContactPageWrapper, StyledContent, StyledTitle, StyledContact, StyledContactMap } from "./styles";
import { sendContactFormular } from "../../services/axiosServices";
import { returnContentDetailPromise } from "../../services/ContactPageServices";
import { selectContactDetails } from "../../selectors/contactDetailDataSelector";

// const nameOfFields = this.props.content.get("contactForm");
/*eslint-disable */
class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: true,
      content: null,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }
  componentDidMount() {
    this.fetchContent();
  }

  async handleSubmitForm(values) {
    const { subject, emailAddress, confirmEmail, message } = values.toJS();
    const errors = {};
    console.log(values.toJS(), errors);
    if (isRequired(emailAddress)) {
      errors.emailAddress = "fieldIsRequired";
    }
    if (isRequired(confirmEmail)) {
      errors.confirmEmail = "fieldIsRequired";
    }
    if (confirmEmail !== emailAddress) {
      errors.confirmEmail = "emailDoNotMatch";
    }
    if (Object.keys(errors).length > 0) {
      console.log("tusom");
      throw new SubmissionError(errors);
    } else {
      sendContactFormular(emailAddress, message, subject);
    }
  }
  async fetchContent() {
    try {
      const response = await returnContentDetailPromise();
      if (response.data[0] === "undefined") {
        this.setState({ content: null });
      } else {
        this.setState({ content: response.data[0] });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    //marker position "priemyselna 2"
    const MarkerPosition = { lat: 48.7290529, lng: 21.2764167 };
    const CenterPosition = { lat: 48.7290529, lng: 21.2764167 };

    return (
      <StyledContactPageWrapper>
        <StyledContent>
          <StyledContactMap>
            <GoogleMapComponent
              MarkerPosition={MarkerPosition}
              CenterPosition={CenterPosition}
              isMarkerShown={this.state.isMarkerShown}
            />
          </StyledContactMap>
          <StyledContact>
            <StyledTitle>KONTAKTNE INFORMACIE</StyledTitle>
            {this.state.content == null ? null : <ContactInfo content={this.props.contactDetails} />}
          </StyledContact>
        </StyledContent>
      </StyledContactPageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
});

export default connect(mapStateToProps)(ContactPage);
