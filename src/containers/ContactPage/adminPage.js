import React from "react";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { SubmissionError } from "redux-form/immutable";
import GoogleMapComponent from "../../components/GoogleMap";
// import ContactForm from "./form";
// import ContactInfo from "./contactInfo";
import { isRequired } from "../../services/validation";
import { StyledContactPageWrapper } from "./styles";
import { sendContactFormular } from "../../services/axiosServices";
import AdminContactForm from "./adminComponents/form";
import { allowEditing, forbidEditing, getStateIsEdit } from "./ducks";
import {
  returnContentPromise,
  returnUpdateContentPromise,
  returnSaveContentPromise,
} from "../../services/ContactPageServices";

// const nameOfFields = this.props.content.get("contactForm");
class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: true,
      edit: false,
      isEmpty: false,
      initValues: {
        address: "",
        emailAddress: "",
        serviceName: "",
        phone1: "",
        phone2: "",
        openDay: "",
        closeDay: "",
      },
      content: null,
    };
    this.handleEditState = this.handleEditState.bind(this);
  }
  componentDidMount() {
    this.fetchContent();
  }

  handleEditState() {
    if (this.state.edit) {
      this.setState({ edit: false });
    } else if (!this.state.edit) {
      this.setState({ edit: true });
    }
  }

  async fetchContent() {
    try {
      const response = await returnContentPromise();
      if (response.data[0] === undefined) {
        this.setState({ content: null });
      } else {
        this.setState({ content: response.data[0] },()=>{console.log("asd",this.state.content)});
      }
    } catch (error) {
      console.log(error);
    }
  }

  // async handleCreateContent(values) {
  //   try {
  //     const response = await returnSaveContentPromise(values);
  //     console.log(response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  // async handleUpdateContent(values) {
  //   try {
  //     const response = await returnUpdateContentPromise(values);
  //     console.log(response);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // }

  async handleSubmitFormUpdate(values,id) {
    try {
      const response = await returnUpdateContentPromise(values.toJS(), id);
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  }

  async handleSubmitFormCreate(values) {
    try {
      const response = await returnSaveContentPromise(values.toJS());
      console.log(response);
    } catch (error) {
      console.log("error", error);
    }
  }

  render() {
    // marker position "priemyselna 2"
    // const MarkerPosition = { lat: 48.7290529, lng: 21.2764167 };
    // const CenterPosition = { lat: 48.7290529, lng: 21.2764167 };
    // if (content !== null) {

    if (this.state.content != null || this.state.content != undefined) {
      const { content } = this.state;
      console.log(content);
      const initValues = {
        address: content.address,
        emailAddress: "asdasd@asda.sk",
        serviceName: content.serviceName,
        number1: content.number1,
        number2: content.number2,
        openDay: content.openDay,
        closeDay: content.closeDay,
      };
      return (
        <StyledContactPageWrapper>
          <div onClick={this.handleEditState}>as</div>
          <AdminContactForm isEditable={this.state.edit} onSubmit={this.handleSubmitFormUpdate} initialValues={initValues} />
        </StyledContactPageWrapper>
      );
    }
    return (
      <StyledContactPageWrapper>
        <div onClick={this.handleEditState}>as</div>
        <AdminContactForm isEditable={this.state.edit} onSubmit={this.handleSubmitFormCreate} />
      </StyledContactPageWrapper>
    );
   
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ allowEditing, forbidEditing }, dispatch);
}
const mapStateToProps = createStructuredSelector({
  isEdit: getStateIsEdit(),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
