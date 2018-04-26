import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectContactDetails,
  selectContactDetailsError,
  selectContactDetailLoading,
} from "../../selectors/contactDetailDataSelector";
import fetchContactDetailDataAction from "../../actions/contactDetailActions";
import Loader from "../Loader";

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    this.props.fetchContactDetailDataAction();
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
  isLoading: selectContactDetailLoading(),
});
const mapDispatchToProps = {
  fetchContactDetailDataAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
