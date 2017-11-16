import React from "react";
import { StyledWrapper, StyledContent, StyledImage } from "./styles";

class GalleryImage extends React.Component {
  constructor() {
    super();
    this.showSliderAndPassImage = this.showSliderAndPassImage.bind(this);
  }
  showSliderAndPassImage(e) {
    e.stopPropagation();
    this.props.handleSliderAndPassImage(this.props.position);
  }
  render() {
    return (
      <StyledWrapper onClick={this.showSliderAndPassImage}>
        <StyledImage src={`data:image;base64,${this.props.obj}`} />
      </StyledWrapper>
    );
  }
}
export default GalleryImage;
