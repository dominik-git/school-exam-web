import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { bindActionCreators } from "redux";
import { fetchContactDetailsAction } from "../../actions/contactDetailActions";
import { returnContentDetailPromise } from "../../services/ContactPageServices";
import { selectContactDetails } from "../../selectors/contactDetailDataSelector";

class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }
  componentDidMount() {
    this.handleFetchContantDetail();
  }
  async handleFetchContantDetail() {
    console.log("init");
    try {
      const { data } = await returnContentDetailPromise();
      if (data[0] != undefined) {
        this.props.fetchContactDetailsAction(data[0]);
      }
      this.setState({ isLoading: false });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    if (this.state.isLoading && this.props.contactDetails.size <= 0) {
      console.log("loeader");
      return <div>loader</div>;
    }
    console.log("children");
    {
      return this.props.children;
    }
  }
}

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchContactDetailsAction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
