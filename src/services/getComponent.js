import React from "react";
import PropTypes from "prop-types";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAdmin } from "./ducks";

export default function getComponents(AdminComponent, UserComponent) {
  class Wrapper extends React.Component {
    constructor() {
      super();
      this.state = {
        s: 1,
      };
    }
    render() {
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
    isAdmin: selectAdmin(),
  });
  return connect(mapStateToProps)(Wrapper);
}
