import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectContactDetails } from "../../selectors/contactDetailDataSelector";
import { StyledFooter, StyledLogo, StyledInfoWrapper, StyledAwesomeIconWrapper,StyledAwesomeIcon } from "./styles";
import FlatIconMessage from "./FlatIconMessage";
import BavariaLogo from "../../assets/servis.png";

class Footer extends React.Component {
  render() {
    let number1 = "";
    let openTime = "";
    let closeTime = "";
    let openDay = "";
    let closeDay = "";
    let time = "";
    if (this.props.contactDetails) {
      number1 = this.props.contactDetails.get("number1");
      openTime = this.props.contactDetails.get("openTime");
      closeTime = this.props.contactDetails.get("closeTime");
      openDay = this.props.contactDetails.get("openDay");
      closeDay = this.props.contactDetails.get("closeDay");
      time = `${openDay}-${closeDay} ${openTime}-${closeTime}`;
    }
    return (
      <StyledFooter>
        <StyledLogo src={BavariaLogo} />
        <StyledInfoWrapper>
          <StyledAwesomeIconWrapper>
            <StyledAwesomeIcon className="fas fa-mobile-alt  fa-2x" aria-hidden="true" /> <p>{number1}</p>
          </StyledAwesomeIconWrapper>
          <StyledAwesomeIconWrapper>
            <StyledAwesomeIcon className="fas fa-clock fa-2x" aria-hidden="true" /> <p>{time}</p>
          </StyledAwesomeIconWrapper>
        </StyledInfoWrapper>
        <FlatIconMessage />
      </StyledFooter>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails()
});

export default connect(mapStateToProps, null)(Footer);
