import React from "react";
import PropTypes from "prop-types";
import { HomePageWrapper, StyledContent, StyledSlider, StyledImg } from "./styles";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";

const timePerSlide = 4000;
const defaultSlidePossition = 0;
let myInterval = {};

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      slides: [slide1, slide2, slide3],
      possition: defaultSlidePossition,
    };
    this.handlePossiiton = this.handlePossiiton.bind(this);
  }
  componentDidMount() {
    myInterval = setInterval(this.handlePossiiton, timePerSlide);
  }
  componentWillUnmount() {
    clearInterval(myInterval);
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
        <h1>Home Page</h1>
        <StyledSlider>
          <StyledImg src={imageOnThePossition} />
        </StyledSlider>
      </HomePageWrapper>
    );
  }
}

export default HomePage;
