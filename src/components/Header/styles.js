import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: black;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  padding: 10px 0;
  background: ${props => props.theme.color.watermelon};
  color: ${props => props.theme.color.neutral};
  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
export const StyledIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5%;
`;
export const StyledNumber = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
export const StyledIcon = styled.span`
  // color: ${props => props.theme.color.watermelon};
  margin-right: 10px;
`;
export const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
export const StyledTime = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;

export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: grey;
  margin: 30px 0;
  height: 100px;
  align-items: center;
`;
export const StyledToogleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledToogleButton = styled.p`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background: #333;
  color: white;
  border-radius: 4px;
  border: 1px solid white;
  ${props => (props.isShow === true ? "display:flex" : "display:none")};
  &:hover {
    background: grey;
  }
`;

const showAnimation = {
  display: "flex",
  opacity: "1"
};
const closeAnimation = {
  display: "none",
  opacity: "0",
  transition: "opacity 1s ease-out"
};
export const StyledMenu = styled.div`
  ${props => (props.isExpand === true ? showAnimation : closeAnimation)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  padding: 9px 16px;
  color: ${props => props.theme.color.neutral};
  font-size: 16px;
  align-items: center;
  &:hover {
    color: ${props => props.theme.color.neutral};
    background: ${props => props.theme.color.watermelon};
    border-radius: 4px;
    text-decoration: none;
  }
  @media (max-width: 840px) {
    margin-top: 20px;
  }
`;

export const StyledLogo = styled.img`
  width: 100%;
`;
export const StyledLogoText = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;
export const StyledLogoWrapper = styled.div`
  width: 250px;
`;

export const StyledMenuWrapper = styled.div`
  background: ${props => props.theme.color.carbon};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
