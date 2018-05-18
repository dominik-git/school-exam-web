import React from "react";
import { StyledWrapper, StyledDelete, StyledImage, StyledDeleteIcon } from "./styles";

class GalleryImage extends React.Component {
  constructor() {
    super();
    this.showSliderAndPassImage = this.showSliderAndPassImage.bind(this);
    this.passImageId = this.passImageId.bind(this);
  }
  showSliderAndPassImage(e) {
    e.stopPropagation();
    this.props.handleSliderAndPassImage(this.props.position);
  }
  passImageId() {
    this.props.deletePhoto(this.props.id);
  }
  render() {
    if (this.props.role === "admin") {
      return (
        <StyledWrapper>
          <StyledImage src={`data:image;base64,${this.props.obj}`} onClick={this.showSliderAndPassImage} />
          <StyledDeleteIcon onClick={this.passImageId}>
            <i className="fas fa-trash fa-2x" aria-hidden="true" />
          </StyledDeleteIcon>
        </StyledWrapper>
      );
    }
    return (
      <StyledWrapper>
        <StyledImage src={`data:image;base64,${this.props.obj}`} onClick={this.showSliderAndPassImage} />
      </StyledWrapper>
    );
  }
}
export default GalleryImage;
