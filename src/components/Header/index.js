import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import { selectContactDetails } from "../../selectors/contactDetailDataSelector";
// import PropTypes from "prop-types";
import {
  StyledHeaderWrapper,
  StyledLogoWrapper,
  StyledNavLink,
  StyledToogleButton,
  StyledInfoWrapper,
  StyledMenuWrapper,
  StyledToogleButtonWrapper,
  StyledNumber,
  StyledEmail,
  StyledIcon,
  StyledTime,
  StyledMenu,
  StyledIconsWrapper,
  StyledLogoText,
  StyledLogo
} from "./styles";
import bmwLogo from "../../assets/servis.png";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isExpand: false,
      isShow: false,
      width: "0",
      height: "0",
    };
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  handleExpand() {
    if (this.state.width < 840) {
      this.setState({
        isShow: true,
        isExpand: false,
      });
    } else if (this.state.width > 840) {
      this.setState({
        isShow: false,
        isExpand: true,
      });
    }
  }

  setNavExpanded() {
    if (this.state.isExpand) {
      this.setState({ isExpand: false });
    } else if (!this.state.isExpand) {
      this.setState({ isExpand: true });
    }
  }

  closeNav() {
    this.setState({ navExpanded: false });
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth }, () => {
      this.handleExpand();
    });
    console.log(window.innerWidth);
  }
  render() {
    const activeStyle = { background: "#253993" }; // #FF3B3F
    const toggleIcon = <i className="fa fa-bars fa-2x" aria-hidden="true" />;
    const phoneIcon = <i className="fas fa-mobile-alt fa-2x" aria-hidden="true" />;
    const timeIcon = <i className="far fa-clock fa-2x" aria-hidden="true" />;
    let number1 = ""
    let openTime = ""
    let closeTime = ""
    let openDay = ""
    let closeDay = ""
    let time = ""

    if(this.props.contactDetails){
       number1 = this.props.contactDetails.get("number1");
       openTime = this.props.contactDetails.get("openTime");
       closeTime = this.props.contactDetails.get("closeTime");
       openDay = this.props.contactDetails.get("openDay");
       closeDay = this.props.contactDetails.get("closeDay");
       time = openDay + "-" + closeDay + " " + openTime + "-" + closeTime;
    }
   
    return (
      <StyledHeaderWrapper>

        <StyledInfoWrapper>
          <StyledLogoWrapper>
            <StyledLogo src={bmwLogo} alt="bmwLogo" />
            {/* <StyledLogoText>BAVARIA SERVIS</StyledLogoText> */}
          </StyledLogoWrapper>
           
           <StyledIconsWrapper>
           <StyledNumber>
             <StyledIcon>{phoneIcon}</StyledIcon>
             {number1}
           </StyledNumber>
           <StyledEmail>
             <StyledIcon>{timeIcon}</StyledIcon>
             {time}
           </StyledEmail>
         </StyledIconsWrapper> 

         
         
        </StyledInfoWrapper>
        <StyledToogleButtonWrapper>
          <StyledToogleButton isShow={this.state.isShow} onClick={this.setNavExpanded}>
            {toggleIcon}
          </StyledToogleButton>
        </StyledToogleButtonWrapper>

        <StyledMenuWrapper>
          <StyledMenu isExpand={this.state.isExpand}>
            <StyledNavLink exact to="/" activeStyle={activeStyle}>
              Domov
            </StyledNavLink>
            <StyledNavLink to="/services" activeStyle={activeStyle}>
              Sluzby
            </StyledNavLink>
            <StyledNavLink to="/orders/newOrders" activeStyle={activeStyle}>
              Objednat sa
            </StyledNavLink>
            <StyledNavLink to="/galery" activeStyle={activeStyle}>
              Galeria
            </StyledNavLink>
            <StyledNavLink to="/contact" activeStyle={activeStyle}>
              Kontakt
        </StyledNavLink>
            <StyledNavLink to="/review" activeStyle={activeStyle}>
              Recenzie
        </StyledNavLink>
          </StyledMenu>
        </StyledMenuWrapper>
      </StyledHeaderWrapper>)

  }
}
const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
});

export default withRouter(connect(mapStateToProps, null)(Header));
