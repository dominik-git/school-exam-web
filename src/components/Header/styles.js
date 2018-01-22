import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height:150px;
  background: ${props => props.theme.color.bmwBlack};
`;
export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 1000px) {
    justify-content: center;
  }
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
  opacity: "1",
};
const closeAnimation = {
  display: "none",
  opacity: "0",
  transition: "opacity 1s ease-out",
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
export const StyledNavLink = styled(NavLink) `
  font-weight: bold;
  margin: 25px;
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

export const StyledLogoWrapper = styled.img`
  width:150px;
  height:150px;
  margin-left: 30px;
`;

export const StyledMenuWrapper = styled.div`
padding:25px 0;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
`;
