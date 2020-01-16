import React from "react";
import { HomePageWrapper, StyledContent, StyledSlider, StyledImg } from "./styles";
import { returnFetchPhotosPromise } from "../../services/HomePageServices";

const timePerSlide = 6000;
const defaultSlidePossition = 0;
let myInterval = {};

class HomePageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      possition: defaultSlidePossition
    };
  }

  componentDidMount() {
    myInterval = setInterval(this.handlePossiiton, timePerSlide);
  }
  componentWillUnmount() {
    clearInterval(myInterval);
  }
  handlePossiiton = () => {
    const lenghtOfArray = this.props.sliderPhotos.length - 1;
    const { possition } = this.state;
    if (this.state.possition >= lenghtOfArray) {
      this.setState({ possition: defaultSlidePossition });
    } else {
      this.setState({ possition: possition + 1 });
    }
  };

  render() {
    const imageFile = this.props.sliderPhotos[this.state.possition];
    return (
      <StyledSlider>
        <StyledImg src={`data:image;base64,${imageFile.data}`} />
      </StyledSlider>
    );
  }
}
export default HomePageSlider;
