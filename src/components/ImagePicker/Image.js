import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setImageFromImagePicker } from "../../actions/priceListAction";
import { StyledImage } from "./styles";

class Image extends React.Component {
  render() {
    const { name, className, selectImage, arrayLength, closeImagePicker } = this.props;

    if (name == "close-button") {
      return (
        <StyledImage onClick={closeImagePicker} role="presentation" >
          <span>{name}</span>
          <span className={className} />
        </StyledImage>
      );

    }

    return (
      <StyledImage onClick={() => { this.props.setImageFromImagePicker(className) }} role="presentation" >
        <span>{name}</span>
        <span className={className} />
      </StyledImage>
    );
  }
};

Image.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string

};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setImageFromImagePicker }, dispatch);
}

export default connect(null, mapDispatchToProps)(Image);