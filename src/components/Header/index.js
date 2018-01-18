import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
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
} from "./styles";
import bmwLogo from "./BMW_logo.png";

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
    const activeStyle = { color: "#e10707" };
    const toggleIcon = <i className="fa fa-bars fa-2x" aria-hidden="true" />;
    const phoneIcon = <i className="fa fa-mobile fa-2x" aria-hidden="true" />;
    const emailIcon = <i className="fa fa-envelope fa-2x" aria-hidden="true" />;
    return (
      <StyledHeaderWrapper>
        <StyledInfoWrapper>
          <StyledNumber>
            <StyledIcon>{phoneIcon}</StyledIcon>
            {this.props.contactDetails.get("number1")}
          </StyledNumber>
          <StyledEmail>
            <StyledIcon>{emailIcon}</StyledIcon>
            {this.props.contactDetails.get("emailAddress")}
          </StyledEmail>
        </StyledInfoWrapper>
        <StyledLogoWrapper src={bmwLogo} alt={"logo"} />
        <StyledToogleButtonWrapper>
          <StyledToogleButton isShow={this.state.isShow} onClick={this.setNavExpanded}>
            {toggleIcon}
          </StyledToogleButton>
        </StyledToogleButtonWrapper>

        <StyledMenuWrapper isExpand={this.state.isExpand}>
          <StyledNavLink exact to="/" activeStyle={activeStyle}>
            Domov
          </StyledNavLink>
          <StyledNavLink to="/autoservice" activeStyle={activeStyle}>
            Autoservis
          </StyledNavLink>
          <StyledNavLink to="/sales" activeStyle={activeStyle}>
            Zlavy
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
        </StyledMenuWrapper>
      </StyledHeaderWrapper>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  contactDetails: selectContactDetails(),
});

export default connect(mapStateToProps,null)(Header);
