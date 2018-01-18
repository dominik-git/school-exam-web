import React from "react";
import { Row, Col } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form/immutable";
import GoogleMapComponent from "../../components/GoogleMap";
import ContactForm from "./userComponents/form";
import ContactInfo from "./userComponents/contactInfo";
import { isRequired } from "../../services/validation";
import { StyledContactPageWrapper, StyledTitle } from "./styles";
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
        <Row className="show-grid">
          <Col xs={12} md={12} lg={12}>
            <GoogleMapComponent
              MarkerPosition={MarkerPosition}
              CenterPosition={CenterPosition}
              isMarkerShown={this.state.isMarkerShown}
            />
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={12} md={5} lg={6}>
            <StyledTitle>Kontaktne informacie</StyledTitle>
            {this.state.content == null ? <div>Empty</div> : <ContactInfo content={this.props.contactDetails} />}
          </Col>
          <Col xs={12} md={7} lg={6}>
            <StyledTitle>Kontaktujte nas</StyledTitle>
            <ContactForm onSubmit={this.handleSubmitForm} />
          </Col>
        </Row>
      </StyledContactPageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
});

export default connect(mapStateToProps)(ContactPage);
