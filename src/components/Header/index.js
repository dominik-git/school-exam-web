import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { seletectContent } from "../LanguageSwitcher/ducks";
// import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { StyledHeaderWrapper, StyledLogoWrapper, StyledLinkWrapper } from "./styles";
import LanguageSwitcher from "../LanguageSwitcher/index";

class Header extends React.Component {
  render() {
    const activeStyle = { color: "red" };
    // data parsed from redux store
    const menu = this.props.content.get("menu");
    return (
      <StyledHeaderWrapper>
        <StyledLogoWrapper />
        <StyledLinkWrapper>
          <NavLink exact to="/" activeStyle={activeStyle}>
            {menu.get("home")}
          </NavLink>
          <NavLink to="/autoservice" activeStyle={activeStyle}>
            {menu.get("autoservice")}
          </NavLink>
          <NavLink to="/sales" activeStyle={activeStyle}>
            {menu.get("sales")}
          </NavLink>
          <NavLink to="/galery" activeStyle={activeStyle}>
            {menu.get("gallery")}
          </NavLink>
          <NavLink to="/contact" activeStyle={activeStyle}>
            {menu.get("contact")}
          </NavLink>
          <NavLink to="/review" activeStyle={activeStyle}>
            {menu.get("review")}
          </NavLink>
        </StyledLinkWrapper>
        <LanguageSwitcher />
      </StyledHeaderWrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  content: seletectContent(),
});
export default connect(mapStateToProps, null)(Header);
