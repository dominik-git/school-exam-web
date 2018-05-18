import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectContactDetails,
  selectContactDetailsError,
  selectContactDetailLoading
} from "../../selectors/contactDetailDataSelector";
import { logIn, logOut } from "../../actions/roleActions";
import fetchContactDetailDataAction from "../../actions/contactDetailActions";
import Loader from "../Loader";

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    this.props.fetchContactDetailDataAction();
    this.getTokenFromSessionStorage();
  }
  getTokenFromSessionStorage() {
    const token = window.sessionStorage.getItem("token");
    console.log(token === null);
    if (token !== null && token === "") {
      this.props.logIn();
     
    } else {
      this.props.logOut();
      
    }
  }
  render() {
    console.log("render");
    if (this.props.isLoading) {
      return <Loader />;
    }
    if (this.props.error) {
      return <div>Data zo servera niesu dostupne</div>;
    }

    return this.props.children;
  }
}

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
  error: selectContactDetailsError(),
  isLoading: selectContactDetailLoading()
});

const mapDispatchToProps = dispatch => ({
  fetchContactDetailDataAction: () => dispatch(fetchContactDetailDataAction()),
  logIn: () => dispatch(logIn()),
  logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Root);
