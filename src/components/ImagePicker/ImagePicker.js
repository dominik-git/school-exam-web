import React from "react";
import PropTypes from "prop-types";
import ReactCSSTrasnitionGroup from "react-addons-css-transition-group";
import Image from "./Image";
import { StyledImagePickerSelect, StyledRightIcon, StyledWrapper } from "./styles";
import "./flaticonForAdmin/flaticon.css";
import "./styles.css";

class ImagePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    console.log("edit");
    if (this.state.isEdit) {
      this.setState({ isEdit: false });
    } else if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    }
  }

  render() {
    const rightArrow = <i className="fa fa-arrow-right" aria-hidden="true" />;
    if (this.state.isEdit) {
      return (
        <ReactCSSTrasnitionGroup
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={1000}
        >
          <StyledWrapper>
            {this.props.images.map(item => (
              <Image className={item.className} name={item.name} key={item.name} closeImagePicker={this.handleEdit} />
            ))}
          </StyledWrapper>
        </ReactCSSTrasnitionGroup>
      );
    };
    return (
      <StyledImagePickerSelect onClick={this.handleEdit} role="presentation">
        <span className={this.props.className} />
        <StyledRightIcon>{rightArrow}</StyledRightIcon>
      </StyledImagePickerSelect >
    );
  }
};
export default ImagePicker;

ImagePicker.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired
};