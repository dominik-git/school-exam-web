import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import Slider from "../../components/Slider";
import { StyledUpload, StyledUploadWrapper, StyledWrapper, StyledImagesWrapper } from "./styles";
import GalleryImage from "../../components/GalleryImage";
import {
  returnDeletePhotosPromise,
  returnFetchPhotosPromise,
  returnUploadPhotoPromise,
} from "../../services/GalleryServices";
import { sucessfulNotification, infoNotification, errorNotification } from "../../services/toastServices";
import { toastForGalleryPage } from "../../const/toastMessages";
import PaginationComponent from "../../components/PaginationComponent";
import StyledTitle from "../../components/Title";
import Loader from "../../components/Loader";

/*eslint-disable */
const imagesPerPage = 8;
class GalleryPageForAdmin extends React.Component {
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
    this.handleDeletePhotoById = this.handleDeletePhotoById.bind(this);
    this.handleSetFile = this.handleSetFile.bind(this);
    this.handleUploadPhoto = this.handleUploadPhoto.bind(this);
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
  handleSetFile(e) {
    const imageFile = e.target.files[0];
    this.setState({ uploadFile: imageFile });
  }
  async handleUploadPhoto() {
    try {
      const response = await returnUploadPhotoPromise(this.state.uploadFile);
      this.fetchPhotos();
      this.refs.file.value = "";
      this.setState({ uploadFile: null })
      sucessfulNotification(toastForGalleryPage.succesfullAdded);
    } catch (err) {
      console.log(err);
      errorNotification(toastForGalleryPage.errorMeesage);
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
    const length = arrayOfImages.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage).length - 1;
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
  async handleDeletePhotoById(id) {
    try {
      const response = await returnDeletePhotosPromise(id);
      const newArray = this.state.arrayOfImages.filter(value => value.id !== id);
      this.setState({ arrayOfImages: newArray });
      infoNotification(toastForGalleryPage.succesfullDeleted);
    } catch (err) {
      console.log(err);
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
      currentPage, allReviewsArray
    } = this.state;
    const indexOfLastElementOnThePage = currentPage * imagesPerPage;
    const indexOfFirstElementOnThePage = indexOfLastElementOnThePage - imagesPerPage;
    const splitedArray = arrayOfImages.slice(indexOfFirstElementOnThePage, indexOfLastElementOnThePage);
    const galerryImages = splitedArray.map((item, index) => (
      
        <GalleryImage
          key={item.id}
          id={item.id}
          obj={item.data}
          position={index}
          handleSliderAndPassImage={this.showSliderAndPassImage}
          deletePhoto={this.handleDeletePhotoById}
          role="admin"
        />
     
    ));
    const imageObj = splitedArray[positionOfSelectedImage];
    if (isLoading) {
      return(
        <StyledWrapper>
          <Loader/>
        </StyledWrapper>
      )
      
    }
    return (
      <StyledWrapper>
        <StyledUploadWrapper>
          <input
            type="file"
            name="file"
            ref="file"
            onChange={this.handleSetFile}
            accept="image/*"
            encType="multipart/form-data"
          />
          <StyledUpload onClick={this.handleUploadPhoto}>
            <i className="fa fa-upload fa-3x" aria-hidden="true"></i>
          </StyledUpload>
        </StyledUploadWrapper>
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
        <StyledImagesWrapper>{galerryImages}</StyledImagesWrapper>
       
        <PaginationComponent
          arrayOfReviews={this.state.arrayOfImages}
          setCurrentPage={this.handleSetCurrentPage}
          todosPerPage={imagesPerPage}
        />
      </StyledWrapper>
    );
  }
}

export default GalleryPageForAdmin;
