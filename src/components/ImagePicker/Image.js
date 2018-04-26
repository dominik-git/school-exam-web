import React from "react";
import PropTypes from "prop-types";
import { change } from "redux-form";
import { connect } from "react-redux";
import { StyledImage } from "./styles";

class Image extends React.Component {
  constructor() {
    super();
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect() {
    this.props.setServiceImageField(this.props.form, this.props.className);
    this.props.handleSelectImage(this.props.className);
  }

  render() {
    const { name, className, selectImage, closeImagePicker } = this.props;
    return (
      <StyledImage onClick={this.handleSelect}>
        <span>{name}</span>
        <span className={className} />
      </StyledImage>
    );
  }
}

Image.propTypes = {
  // className: PropTypes.string
};

export default connect(null, {
  setServiceImageField: (form, value) => change(form, "serviceImage", value)
})(Image);
