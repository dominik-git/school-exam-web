import React from "react";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form/immutable";
import { createStructuredSelector } from "reselect";
import { StyledContactPageWrapper } from "./styles";
import { selectContactDetails } from "../../selectors/contactDetailDataSelector";
import AdminContactForm from "./adminComponents/form";
import { isRequired } from "../../services/validation";
import { returnUpdateContentDetailPromise, returnSaveContentDetailPromise } from "../../services/ContactPageServices";
import fetchContactDetailDataAction from "../../actions/contactDetailActions";

class ContactPageForAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: true,
      readOnly: true,
    };
    this.handleEditState = this.handleEditState.bind(this);
    this.handleSubmitFormUpdate = this.handleSubmitFormUpdate.bind(this);
    this.handleSubmitFormCreate = this.handleSubmitFormCreate.bind(this);
  }

  handleEditState() {
    if (this.state.readOnly) {
      this.setState({ readOnly: false });
    } else if (!this.state.readOnly) {
      this.setState({ readOnly: true });
    }
  }

  async handleSubmitFormUpdate(values) {
    try {
      const response = await returnUpdateContentDetailPromise(values.toJS());
      this.props.fetchContactDetailDataAction();
    } catch (error) {
      console.log("error", error);
    }
  }


  async handleSubmitFormCreate(values) {
    const { serviceName, address, emailAddress, number1 } = values.toJS()

    const errors = {};
    if (isRequired(serviceName)) {
      errors.serviceName = "fieldIsRequired";
    }
    if (isRequired(address)) {
      errors.address = "fieldIsRequired";
    }
    if (isRequired(emailAddress)) {
      errors.emailAddress = "fieldIsRequired";
    }
    if (isRequired(number1)) {
      errors.number1 = "fieldIsRequired";
    }
    if (Object.keys(errors).length > 0) {
      throw new SubmissionError(errors);
    } else {
      try {
         await returnSaveContentDetailPromise(values.toJS());
        this.props.fetchContactDetailDataAction();
      } catch (error) {
        console.log("error", error);
      }
    }

  }


  render() {
    const { contactDetails } = this.props;
    if (contactDetails) {
      const initialValues = {
        id: contactDetails.get("id"),
        address: contactDetails.get("address"),
        emailAddress: contactDetails.get("emailAddress"),
        serviceName: contactDetails.get("serviceName"),
        number1: contactDetails.get("number1"),
        number2: contactDetails.get("number2"),
        openDay: contactDetails.get("openDay"),
        closeDay: contactDetails.get("closeDay"),
        openTime: contactDetails.get("openTime"),
        closeTime: contactDetails.get("closeTime"),
      };
      return (
        <StyledContactPageWrapper>
          <button onClick={this.handleEditState}>EDIT</button>
          <AdminContactForm
            readOnly={this.state.readOnly}
            changeSubmitButtonText
            onSubmit={this.handleSubmitFormUpdate}
            initialValues={initialValues}
          />
        </StyledContactPageWrapper>
      );
    }
    return (
      <StyledContactPageWrapper>
        <AdminContactForm isEditable={this.state.edit} onSubmit={this.handleSubmitFormCreate} />
      </StyledContactPageWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
});
const mapDispatchToProps = {
  fetchContactDetailDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPageForAdmin);
