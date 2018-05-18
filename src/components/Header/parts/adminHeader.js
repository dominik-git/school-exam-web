import React from "react";
import { StyledNavLink, StyledMenuWrapper, StyledMenu, StyledLogout } from "../styles";

const activeStyle = { background: "#253993" };
const AdminHeader = ({ isExpand, logout }) => (
  <StyledMenuWrapper>
    <StyledMenu isExpand>
      <StyledNavLink exact to="/" activeStyle={activeStyle}>
        Domov
      </StyledNavLink>
      <StyledNavLink to="/services" activeStyle={activeStyle}>
        Sluzby
      </StyledNavLink>
      <StyledNavLink to="/orders/newOrders" activeStyle={activeStyle}>
        Objednavky
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
    <StyledLogout onClick={logout}>Odhlasit sa</StyledLogout>
  </StyledMenuWrapper>
);

export default AdminHeader;
