import React from "react";
import DragAndDropList from "../../components/DragAndDropComponent";
import { HomePageWrapper, StyledSlider, StyledImg } from "./styles";
import {
  returnUploadPhotoPromise,
  returnFetchPhotosPromise,
  returnDeletePhotosPromise,
} from "../../services/HomePageServices";
import slide1 from "./assets/bmw_mini.jpg";
import slide2 from "./assets/bmw9.jpg";
import slide3 from "./assets/mini.jpg";

const timePerSlide = 5000;
const defaultSlidePossition = 0;
let myInterval = {};

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      slides: [slide1, slide2, slide3],
      possition: defaultSlidePossition,
      allPhotos: [],
      photoFile: {},
      photosToUpload:[],
    };
    this.handlePossiiton = this.handlePossiiton.bind(this);
    this.handleSetSlides = this.handleSetSlides.bind(this);
  }

  componentDidMount() {
    myInterval = setInterval(this.handlePossiiton, timePerSlide);
  }
  componentWillUnmount() {
    clearInterval(myInterval);
  }
  getAllPhotosRequest = async () => {
    try {
      const response = await returnFetchPhotosPromise();
      this.setState({ allPhotos: response.data });
    } catch (err) {
      console.log(err);
    }
  };
  uploadPhotoRequest = async photoFile => {
    try {
      await returnUploadPhotoPromise(photoFile);
    } catch (err) {
      console.log(err);
    }
  };
  deletePhotoRequest = async id => {
    try {
      await returnDeletePhotosPromise(id);
    } catch (err) {
      console.log(err);
    }
  };
  pushPhotoToArray = photo => {
    this.setState({ photosToUpload: [...this.state.photosToUpload, photo] },()=>{
      console.log(this.state.photosToUpload);
    });
  };
  handleSetSlides(arrayOfSlides) {
    this.setState({ slides: arrayOfSlides });
  }

  handlePossiiton() {
    const { slides, possition } = this.state;
    const lenghtOfArray = slides.length - 1;
    this.setState({ possition: possition + 1 }, () => {
      if (possition >= lenghtOfArray) {
        this.setState({ possition: defaultSlidePossition });
      }
      console.log("possition: ", possition);
    });
  }
  onDragEnter = e => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target.value);
}
  render() {
    const { slides, possition } = this.state;
    const imageOnThePossition = slides[possition];

    return (
      <HomePageWrapper>
        <StyledSlider>
          <StyledImg image={imageOnThePossition} />
        </StyledSlider>
        <DragAndDropList photos={this.state.slides} handleSetSlides={this.handleSetSlides} />
      </HomePageWrapper>
    );
  }
}
export default HomePage;
