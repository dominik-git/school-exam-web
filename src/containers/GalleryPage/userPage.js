import React from "react";
import { Col, Row, Grid } from "react-bootstrap";
import Slider from "../../components/Slider";
import { ImagesWrapper, StyledTitle, StyledWrapper } from "./styles";
import GalleryImage from "../../components/GalleryImage";
import { returnFetchPhotosPromise } from "../../services/GalleryServices";
import { errorNotification } from "../../services/toastServices";
import { toastForGalleryPage } from "../../const/toastMessages";
import PaginationComponent from "../../components/PaginationComponent";
import Loader from "../../components/Loader";
import "./styles.css";

/*eslint-disable */
const imagesPerPage = 9;
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
      uploadFile: null,
      isLoading: true,
      elementFileInput: null,
      currentPage: 1,
    };
    this.handleMoveLeft = this.handleMoveLeft.bind(this);
    this.handleMoveRight = this.handleMoveRight.bind(this);
    this.showSliderAndPassImage = this.showSliderAndPassImage.bind(this);
    this.closeSlider = this.closeSlider.bind(this);
    this.handleSetCurrentPage = this.handleSetCurrentPage.bind(this);
  }

  componentDidMount() {
    this.fetchPhotos();
  }
  async fetchPhotos() {
    try {
      const response = await returnFetchPhotosPromise();
      console.log(response.data);
      this.setState({
        arrayOfImages: response.data,
        isLoading: false,
      });
    } catch (err) {
      errorNotification(toastForGalleryPage.errorMeesage);
      console.log(err);
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
    const { positionOfSelectedImage, arrayOfImages } = this.state;
    const indexOfLastElementOnThePage = this.state.currentPage * imagesPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - imagesPerPage;
    // this.state.arrayOfImages.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage).length - 1;
    // const length = this.state.arrayOfImages.length - 1;
    const length = arrayOfImages.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage).length - 1;
    console.log();
    if (positionOfSelectedImage === length) {
      this.setState({ isMoveRightPossible: false });
    } else {
      this.setState({ isMoveRightPossible: true });
    }
  }

  // move left
  handleMoveLeft(e) {
    e.stopPropagation();
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
  handleMoveRight(e) {
    e.stopPropagation();
    const { positionOfSelectedImage, arrayOfImages } = this.state;
    // const length = arrayOfImages.length - 1;
    const indexOfLastElementOnThePage = this.state.currentPage * imagesPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - imagesPerPage;
    const length = arrayOfImages.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage).length - 1;
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

  handleSetCurrentPage(currentPage) {
    this.setState({ currentPage });
  }
  render() {
    const {
      isMoveLeftPossible,
      isMoveRightPossible,
      isSliderShow,
      arrayOfImages,
      positionOfSelectedImage,
      isLoading,
      currentPage,
      allReviewsArray,
    } = this.state;
    const indexOfLastElementOnThePage = currentPage * imagesPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - imagesPerPage;
    const splitedArray = arrayOfImages.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage);
    const galerryImages = splitedArray.map((item, index) => (
      <Col xs={12} sm={6} md={4} lg={4} xl={4} key={item.id}>
        <GalleryImage
          id={item.id}
          obj={item.data}
          position={index}
          handleSliderAndPassImage={this.showSliderAndPassImage}
        />
      </Col>
    ));
    const imageObj = splitedArray[positionOfSelectedImage];
    if (isLoading) {
      return (
        <StyledWrapper>
          <Loader />
        </StyledWrapper>
      );
    }
    return (
      <StyledWrapper>
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
        <StyledTitle>Galeria</StyledTitle>
        <Grid>
          <Row className="show-grid">{galerryImages}</Row>
        </Grid>
        <PaginationComponent
          arrayOfReviews={this.state.arrayOfImages}
          setCurrentPage={this.handleSetCurrentPage}
          todosPerPage={imagesPerPage}
        />
      </StyledWrapper>
    );
  }
}

export default GalleryPageForUser;
