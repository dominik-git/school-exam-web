import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Slider from "../../components/Slider";
import { Styledwrapper, ImagesWrapper } from "./styles";
import GalleryImage from "../../components/GalleryImage";
import { UploadPhoto } from "../../services/axiosServices";
import { selectMyPhotos, asyncAction } from "./ducks";

/*eslint-disable */

class GalleryPage extends React.Component {
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
    this.handleSetFile = this.handleSetFile.bind(this);
  }

  // show or hide arrow after rendered page
  componentWillMount() {}
  componentDidMount() {
    if (this.props.galleryPhotos.size === 0) {
      this.props.dispatch(asyncAction());
    }
  }

  handleSetFile(e) {
    const imageFile = e.target.files[0];
    this.setState({ uploadFile: imageFile }, () => {});
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
    const galerryImages = this.props.galleryPhotos
      .toJSON()
      .map((item, index) => (
        <GalleryImage
          key={item.id}
          obj={item.data}
          position={index}
          handleSliderAndPassImage={this.showSliderAndPassImage}
        />
      ));
    return (
      <div>
        <input
          type="file"
          id="file"
          name="file"
          onChange={this.handleSetFile}
          accept="image/*"
          encType="multipart/form-data"
        />
        <button
          onClick={() => {
            UploadPhoto(this.state.uploadFile);
          }}
        >
          button
        </button>

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

        <ImagesWrapper> {galerryImages} </ImagesWrapper>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  galleryPhotos: selectMyPhotos(),
});

export default connect(mapStateToProps)(GalleryPage);
