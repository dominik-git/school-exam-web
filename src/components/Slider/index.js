import React from "react";
import NextIcon from "./next.png";
import BackIcon from "./back.png";
import {
  StyledWrapper,
  StyledSlider,
  StyledContent,
  StyledOverlay,
  StyledLeftIcon,
  StyledRightIcon,
  LeftIconWrapper,
  RightIconWrapper,
  StyledImage,
} from "./styles";

class Slider extends React.Component {
  constructor() {
    super();
  }

  render() {
    const image = this.props.imageObj.data;
    return (
      <StyledWrapper isSliderShow={this.props.isSliderShow} onClick={this.props.closeSlider}>
        {/* <StyledOverlay onClick={this.props.closeSlider} /> */}
        <StyledContent>
          <StyledImage src={`data:image;base64,${image}`} />
          <LeftIconWrapper onClick={(e)=>{this.props.moveLeft(e)}} isMoveLeftPossible={this.props.isMoveLeftPossible}>
            <StyledLeftIcon src={BackIcon} onClick={this.handleResizeIcon} />
          </LeftIconWrapper>
          <RightIconWrapper onClick={(e)=>{this.props.moveRight(e)}} isMoveRightPossible={this.props.isMoveRightPossible}>
            <StyledRightIcon src={NextIcon} />
          </RightIconWrapper>
        </StyledContent>
      </StyledWrapper>
    );
  }
}
export default Slider;
