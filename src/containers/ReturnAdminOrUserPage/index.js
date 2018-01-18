import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { getStateIsAdmin } from "../../selectors/roleSelector";

export default function getComponents(AdminComponent, UserComponent) {
  class Wrapper extends React.Component {
    constructor() {
      super();
    }
    render() {
      console.log("role", this.props.isAdmin);
      if (this.props.isAdmin) {
        return <AdminComponent />;
      }
      return <UserComponent />;
    }
  }
  Wrapper.propTypes = {
    isAdmin: PropTypes.bool.isRequired,
  };
  const mapStateToProps = createStructuredSelector({
    isAdmin: getStateIsAdmin(),
  });
  return connect(mapStateToProps)(Wrapper);
}
