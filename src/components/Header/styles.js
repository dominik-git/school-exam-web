import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${props => props.theme.color.bmwBlack};
  color: white;
  justify-content: flex-start;
  font-size: 16px;
  font-weight: bold;
  box-shadow: 0 8px 17px 0 ${props => props.theme.color.bmwDarkBlue},
    0 6px 20px 0 ${props => props.theme.color.bmwDarkBlue};
`;
export const StyledNumber = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
export const StyledIcon = styled.span`
  margin-right: 10px;
`;
export const StyledEmail = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
export const StyledLogoWrapper = styled.img`
  display:block;
  width:250px;
  height:100px;
  margin 0 auto;
  margin-top:30px;
`;
export const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: grey;
  margin: 30px 0;
  height: 70px;
  align-items: center;
`;
export const StyledToogleButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
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
  opacity: "1",
};
const closeAnimation = {
  display: "none",
  opacity: "0",
  transition: "opacity 1s ease-out",
};
export const StyledMenuWrapper = styled.div`
  ${props => (props.isExpand === true ? showAnimation : closeAnimation)};
  min-height: 100px;
  flex-direction: row;
  justify-content: space-around;
  background: ${props => props.theme.color.bmwBlack};
  margin: 30px 0;
  align-items: center;
  box-shadow: 0 8px 17px 0 ${props => props.theme.color.bmwDarkBlue},
    0 6px 20px 0 ${props => props.theme.color.bmwDarkBlue};
  @media (max-width: 840px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const StyledNavLink = styled(NavLink)`
  font-weight: bold;
  margin-top: 10px;
  color: white;
  font-size: 18px;
  &:hover {
    color: ${props => props.theme.color.bmwRed};
    border-radius: 4px;
  }
  @media (max-width: 840px) {
    margin-top: 20px;
  }
`;
