import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Slider from "../../components/Slider";
import { Row, Col } from "react-bootstrap";
import { Styledwrapper, ImagesWrapper } from "./styles";
import GalleryImage from "../../components/GalleryImage";
import { UploadPhoto } from "../../services/axiosServices";
import { selectMyPhotos, asyncAction } from "./ducks";

/*eslint-disable */

class GalleryPageForUser extends React.Component {
  constructor() {
    super();
    this.state = {
      positionOfSelectedImage: 0,
      arrayOfImages: [],
      lenghtOfArrayOfImages: 0,
      isMoveLeftPossible: true,
      isMoveRightPossible: true,
      isSliderShow: false,
      selectedImage: "",
      uploadFile: "",
    };
    this.handleMoveLeft = this.handleMoveLeft.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);
    this.showSliderAndPassImage = this.showSliderAndPassImage.bind(this);
    this.closeSlider = this.closeSlider.bind(this);
  }

  // show or hide arrow after rendered page
  componentWillMount() {}
  componentDidMount() {
    if (this.props.galleryPhotos.size === 0) {
      this.props.dispatch(asyncAction());
    }
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
    console.log("close");
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
    const length = this.props.galleryPhotos.size - 1;
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
    const length = this.props.galleryPhotos.size - 1;
    const { positionOfSelectedImage } = this.state;
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
    const {
      isMoveLeftPossible,
      isMoveRightPossible,
      isSliderShow,
      arrayOfImages,
      positionOfSelectedImage,
    } = this.state;
    const imageObj = this.props.galleryPhotos.toJSON()[positionOfSelectedImage];
    const galerryImages = this.props.galleryPhotos.toJSON().map((item, index) => (
      <Col xs={6} md={4} lg={3}>
        <GalleryImage
          key={item.id}
          obj={item.data}
          id={item.id}
          position={index}
          handleSliderAndPassImage={this.showSliderAndPassImage}
        />
      </Col>
    ));
    return (
      <div>
        {isSliderShow ? (
          <Slider
            isMoveLeftPossible={isMoveLeftPossible}
            isMoveRightPossible={isMoveRightPossible}
            moveRight={this.handleMoveRight}
            moveLeft={this.handleMoveLeft}
            imageObj={imageObj}
            closeSlider={this.closeSlider}
          />
        ) : null}

        <ImagesWrapper>
          <Row className="show-grid">{galerryImages}</Row>
        </ImagesWrapper>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  galleryPhotos: selectMyPhotos(),
});

export default connect(mapStateToProps)(GalleryPageForUser);
