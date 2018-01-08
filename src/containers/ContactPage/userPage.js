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
import { seletectContent } from "../../components/LanguageSwitcher/ducks";
import { sendContactFormular } from "../../services/axiosServices";
import { returnContentPromise } from "../../services/ContactPageServices";

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
    const errorMessages = this.props.content.get("errors");
    const { subject, emailAddress, confirmEmail, message } = values.toJS();
    const errors = {};
    console.log(values.toJS(), errors);
    if (isRequired(emailAddress)) {
      errors.emailAddress = errorMessages.get("fieldIsRequired");
    }
    if (isRequired(confirmEmail)) {
      errors.confirmEmail = errorMessages.get("fieldIsRequired");
    }
    if (confirmEmail !== emailAddress) {
      errors.confirmEmail = errorMessages.get("emailDoNotMatch");
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
      const response = await returnContentPromise();
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
    console.log("o", this.state.content);
    const nameOfFields = this.props.content.get("contactForm");
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
            {this.state.content == null ? <div>Empty</div> : <ContactInfo content={this.state.content} />}
          </Col>
          <Col xs={12} md={7} lg={6}>
            <StyledTitle>Kontaktujte nas</StyledTitle>
            <ContactForm onSubmit={this.handleSubmitForm} nameOfFields={nameOfFields} title={"Kontaktuje nas"} />
            {/* initialValues={{ message: "emailasdasdasasas" }} */}
          </Col>
        </Row>
      </StyledContactPageWrapper>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  content: seletectContent(),
});

export default connect(mapStateToProps)(ContactPage);
