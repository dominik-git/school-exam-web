import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { StyledModalWraper, StyledButtonGroup } from "./styles";

class DecisionModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isModalShow: false,
      value: null,
    }
    this.closeModal = this.closeModal.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
  }
  closeModal() {
    this.setState({ isModalShow: false });
    console.log("close");
  }
  openModal() {
    this.setState({
      isModalShow: true,
    });
    console.log("open");
  }
  passValue(value) {
    this.setState({ value });
    console.log("value", value);
  }

  handleAccept() {
    { this.state.value === null ? this.props.acceptCall : this.props.acceptCall(this.state.value) };
    this.closeModal();
  }
  render() {
    const { message, acceptCall } = this.props;
    return (
      <StyledModalWraper open={this.state.isModalShow}>
        <div>{message}</div>
        <StyledButtonGroup>
          <Button bsStyle="success" onClick={this.handleAccept}>
            Accept
          </Button>
          <Button onClick={this.closeModal}>Cancel</Button>
        </StyledButtonGroup>
      </StyledModalWraper>
    );
  };
};


DecisionModal.propTypes = {
  acceptCall: PropTypes.func.isRequired,
  message: PropTypes.string
};

export default DecisionModal;