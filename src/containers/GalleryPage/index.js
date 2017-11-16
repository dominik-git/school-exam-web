import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createStructuredSelector } from "reselect";
import Slider from "../../components/Slider";
import { Styledwrapper, ImagesWrapper } from "./styles";
import GalleryImage from "../../components/GalleryImage";
import { fetchPhotos, testAction, selectTest, selectMyPhotos, failedFetchPhotos, selectError } from "./ducks";

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
    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.handleSetFile = this.handleSetFile.bind(this);
  }

  // show or hide arrow after rendered page
  componentDidMount() {
    this.initSliderStates();
    this.handleFetchPhotos();
  }

  initSliderStates() {
    this.handleMoveLeft();
    this.handleMoveRight();
  }
  handleSetFile(e) {
    const imageFile = e.target.files[0];
    this.setState({ uploadFile: imageFile }, () => {});
  }

  // if store is empty then fetch photos and save it in the Store, if data was fethed before then use it and dont call fetch again
  async handleFetchPhotos() {
    if (this.props.galleryPhotos.size === 0) {
      try {
        const { data } = await axios.get("/api/gallery");
        this.props.fetchPhotos(data);
        this.setState({
          arrayOfImages: this.props.galleryPhotos.toJSON(),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("photo was downloaded");
    }
  }

  handleUploadFile() {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const data = new FormData();
    data.append("photo", this.state.uploadFile);
    axios
      .post("/api/gallery", data, config)
      .then(response => console.log(response))
      .catch(errors => console.log(errors));
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
    const length = this.state.arrayOfImages.length - 1;
    const { positionOfSelectedImage, lenghtOfArrayOfImages } = this.state;
    if (positionOfSelectedImage < length) {
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
    const { isMoveLeftPossible, isMoveRightPossible, isSliderShow } = this.state;
    const imageObj = this.state.arrayOfImages[this.state.positionOfSelectedImage];
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
        <button onClick={this.handleUploadFile}>button</button>

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
  test: selectTest(),
  galleryPhotos: selectMyPhotos(),
  error: selectError(),
});
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPhotos, testAction, failedFetchPhotos }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(GalleryPage);
