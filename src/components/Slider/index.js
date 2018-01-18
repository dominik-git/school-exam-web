import React from "react";
import NextIcon from "./next.png";
import BackIcon from "./back.png";
import {
  StyledWrapper,
  StyledSlider,
  StyledContent,
  StyledOverlay,
  StyledLeftIcon,
  StyledRightIcon,
  LeftIconWrapper,
  RightIconWrapper,
  StyledImage,
} from "./styles";

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      lenghtOfArrayOfImages: 0,
      isMoveLeftPossible: true,
      isMoveRightPossible: true,
      isSliderShow: false,
      selectedImage: "",
    };
    this.handleMoveLeft = this.handleMoveLeft.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);
    this.showSliderAndPassImage = this.showSliderAndPassImage.bind(this);
    this.closeSlider = this.closeSlider.bind(this);
  }
  // show slider (set state isSliderShow to "true") and show appropriate image, function
  // is called in "GalleryImage" component where it's passed image
  showSliderAndPassImage(position) {
    this.setState({ isSliderShow: true, positionOfSelectedImage: position }, () => {
      this.isMoveLeftPossibleFunc();
      this.isMoveRightPossibleFunc();
    });
  }
  // close slider
  closeSlider() {
    this.setState({ isSliderShow: false });
  }

  // if image is the first we cant move left and set state "isMoveLeftPossible" to false
  isMoveLeftPossibleFunc() {
    if (this.state.positionOfSelectedImage === 0) {
      this.setState({ isMoveLeftPossible: false });
    } else {
      this.setState({ isMoveLeftPossible: true });
    }
  }

  // if image is the last we cant move right and set state "isMoveRightPossible" to false
  isMoveRightPossibleFunc() {
    const length = this.state.arrayOfImages.length - 1;
    if (this.state.positionOfSelectedImage === length) {
      this.setState({ isMoveRightPossible: false });
    } else {
      this.setState({ isMoveRightPossible: true });
    }
  }

  // move left
  handleMoveLeft() {
    const { positionOfSelectedImage } = this.state;
    if (positionOfSelectedImage > 0) {
      this.setState(
        {
          positionOfSelectedImage: this.state.positionOfSelectedImage - 1,
          isMoveLeftPossible: true,
          isMoveRightPossible: true,
        },
        () => this.isMoveLeftPossibleFunc(),
      );
    }
  }
  // move right
  handleMoveRight() {
    const { positionOfSelectedImage, arrayOfImages } = this.state;
    console.log(arrayOfImages.length);
    const length = arrayOfImages.length - 1;

    if (positionOfSelectedImage < length) {
      this.setState(
        {
          positionOfSelectedImage: positionOfSelectedImage + 1,
          isMoveRightPossible: true,
          isMoveLeftPossible: true,
        },
        () => this.isMoveRightPossibleFunc(),
      );
    }
  }

  render() {
    const image = this.props.imageObj.data;
    return (
      <StyledWrapper isSliderShow={this.props.isSliderShow}>
        <StyledOverlay onClick={this.props.closeSlider} />
        <StyledContent>
          <StyledImage src={`data:image;base64,${image}`} />
          <LeftIconWrapper onClick={this.props.moveLeft} isMoveLeftPossible={this.props.isMoveLeftPossible}>
            <StyledLeftIcon src={BackIcon} onClick={this.handleResizeIcon} />
          </LeftIconWrapper>
          <RightIconWrapper onClick={this.props.moveRight} isMoveRightPossible={this.props.isMoveRightPossible}>
            <StyledRightIcon src={NextIcon} />
          </RightIconWrapper>
        </StyledContent>
      </StyledWrapper>
    );
  }
}
export default Slider;
