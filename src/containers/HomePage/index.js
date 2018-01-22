import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchContactDetailsAction } from "../../actions/contactDetailActions";
import { returnContentDetailPromise } from "../../services/ContactPageServices";
import PropTypes from "prop-types";
import { HomePageWrapper, StyledContent, StyledSlider, StyledImg } from "./styles";
import slide1 from "./assets/slide1.jpg";
import slide2 from "./assets/slide2.jpg";
import slide3 from "./assets/slide3.jpg";
import Subheader from "../../components/SubHeader";
import bmwImage from "../../assets/bmw7.jpg";

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
    // this.handleFetchContantDetail();
  }
  componentWillUnmount() {
    clearInterval(myInterval);
  }
  // async handleFetchContantDetail() {
  //   console.log("init");
  //   try {
  //     const { data } = await returnContentDetailPromise();
  //     if (data[0] != undefined) {
  //       this.props.dispatch(fetchContactDetailsAction(data[0]));
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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
        <Subheader image={bmwImage} text={"DOMOV"} />
        <h1>Home Page</h1>
        <StyledSlider>
          <StyledImg src={imageOnThePossition} />
        </StyledSlider>
      </HomePageWrapper>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchContactDetailsAction }, dispatch);
// }
export default HomePage;
