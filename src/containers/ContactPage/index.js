import React from "react";
import { connect } from "react-redux";
import GoogleMapComponent from "../../components/GoogleMap";
import ContactForm from "./form";

class ContactPage extends React.Component {
  constructor() {
    super();
    this.state = {
      isMarkerShown: true,
    };
  }
  submit = values => {
    const { firstName, lastName, email } = values.toJS();
    const errors = {};
    // if (firstName.length < 2) {
    //   errors.firstName = "must be longer";
    //   console.log(errors.firstName);
    // }
    if (!firstName.trim()) {
      errors.firstName = "Required";
      console.log(errors.firstName);
    } else if (firstName.trim().length < 3) {
      errors.firstName = "Must be 15 characters or less";
      console.log(errors.firstName);
    }
    // print the form values to the console
    console.log(values.get("firstName"), values.get("lastName"), values.get("email"));
  };

  render() {
    const MarkerPosition = { lat: 48.7290529, lng: 21.2764167 };
    const CenterPosition = { lat: 48.7290529, lng: 21.2764167 };
    return (
      <div>
        <GoogleMapComponent
          MarkerPosition={MarkerPosition}
          CenterPosition={CenterPosition}
          isMarkerShown={this.state.isMarkerShown}
        />
        <ContactForm onSubmit={this.submit} />
      </div>
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
