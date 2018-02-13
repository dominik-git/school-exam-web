import React from "react";
import DragAndDropList from "../../components/DragAndDropComponent";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { fetchContactDetailsAction } from "../../actions/contactDetailActions";
// import { returnContentDetailPromise } from "../../services/ContactPageServices";
// import PropTypes from "prop-types";
import { HomePageWrapper, StyledContent, StyledSlider, StyledImg } from "./styles";
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
      possition: defaultSlidePossition
    };
    this.handlePossiiton = this.handlePossiiton.bind(this);
    this.handleSetSlides = this.handleSetSlides.bind(this);
  }

  componentDidMount() {
    myInterval = setInterval(this.handlePossiiton, timePerSlide);
    // this.handleFetchContantDetail();
  }
  componentWillUnmount() {
    clearInterval(myInterval);
  }

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
