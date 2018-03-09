import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bmwImage from "../../assets/bmw_order.png";

export const StyledFormWrapper = styled.div`
  // width: 600px;
  // margin: 0 auto;
`;
export const StyledWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  &:after {
    content: "";
    display: block;
    position: fixed;
    background-image: url(${bmwImage});
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translateX(-25%) translateY(-50%);
  }
  @media (max-width: 1300px) {
    &:after {
      transform: translateX(-50%) translateY(-50%);
    }
  }
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledHidenInput = styled.div`
  display: none;
`;
export const StyledOrderField = styled.div`
  width: 45%;
`;
export const StyledMenuWrapper = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
`;
export const StyledTitle = styled.h2`
  margin: 20px 0;
  padding-bottom: 10px;
  font-weight: bold;
  color: ${props => props.theme.color.watermelon};
  border-bottom: 1px solid ${props => props.theme.color.watermelon};
`;
export const StyledText = styled.span`
  padding-bottom: 10px;
  display: block;
  font-size: 15px;
  word-wrap: break-word;
  color: ${props => props.theme.color.carbon};
`;
export const StyledNavLink = styled(NavLink)`
  display: flex;
  font-weight: bold;
  text-transform: uppercase;
  padding: 16px 16px;
  color: black;
  font-size: 15px;
  align-items: center;
  &.active {
    border-bottom: 3px solid ${props => props.theme.color.watermelon};
    color: ${props => props.theme.color.carbon};
    text-decoration: none;
    font-weight: 600;
  }
  &:hover {
    color: ${props => props.theme.color.watermelon};
    border-radius: 4px;
    text-decoration: none;
  }
  // @media (max-width: 840px) {
  //   margin-top: 20px;
  // }
`;
