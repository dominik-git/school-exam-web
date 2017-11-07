import React from "react";
import Slider from "../../components/Slider";
import { Styledwrapper, ImagesWrapper } from "./styles";
import GalleryImage from "../../components/GalleryImage";

class GalleryPage extends React.Component {
  constructor() {
    super();
    this.state = {
      positionOfSelectedImage: 0,
      arrayOfImages: ["1", "2", "3", "4", "5"],
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

  // set lenght of array before rendered page
  componentWillMount() {
    this.setState({ lenghtOfArrayOfImages: this.state.arrayOfImages.length - 1 });
  }
  // show or hide arrow after rendered page
  componentDidMount() {
    this.handleMoveLeft();
    this.handleMoveRight();
  }
  // show slider (set state isSliderShow to "true") and show appropriate image, function
  // is called in "GalleryImage" component where it's passed image
  showSliderAndPassImage(position) {
    this.setState(
      { isSliderShow: true, positionOfSelectedImage: position },
      () => {this.isMoveLeftPossibleFunc();
       this.isMoveRightPossibleFunc();
      }
    );
    console.log("show");
  }
  // close slider
  closeSlider() {
    this.setState({ isSliderShow: false });
    console.log("close");
  }

  // if image is the first we cant move left and set state "isMoveLeftPossible" to false
  isMoveLeftPossibleFunc() {
    if (this.state.positionOfSelectedImage === 0) {
      this.setState({ isMoveLeftPossible: false });
      console.log("left asdas");
    } else {
      this.setState({ isMoveLeftPossible: true });
    }
  }

  // if image is the last we cant move right and set state "isMoveRightPossible" to false
  isMoveRightPossibleFunc() {
    if (this.state.positionOfSelectedImage === this.state.lenghtOfArrayOfImages) {
      this.setState({ isMoveRightPossible: false });
      console.log("right asdas");
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
    const { positionOfSelectedImage, lenghtOfArrayOfImages } = this.state;
    if (positionOfSelectedImage < lenghtOfArrayOfImages) {
      console.log("move right");
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
    const { isMoveLeftPossible, isMoveRightPossible, isSliderShow, arrayOfImages } = this.state;
    const image = arrayOfImages[this.state.positionOfSelectedImage];
    const galerryImages = arrayOfImages.map((obj, i) => (
      <GalleryImage key={i} obj={obj} position={i} handleSliderAndPassImage={this.showSliderAndPassImage} />
    ));
    return (
      <div>
        <Slider
          isMoveLeftPossible={isMoveLeftPossible}
          isMoveRightPossible={isMoveRightPossible}
          moveRight={this.handleMoveRight}
          moveLeft={this.handleMoveLeft}
          image={image}
          isSliderShow={isSliderShow}
          closeSlider={this.closeSlider}
        />
        <ImagesWrapper> {galerryImages}</ImagesWrapper>
      </div>
    );
  }
}
export default GalleryPage;
