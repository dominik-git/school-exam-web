import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bmwImage from "../../assets/bmw_order.png";

export const StyledFormWrapper = styled.div`
  padding-right: 10px;
`;
export const StyledWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 70%;
  margin: 40px auto;
`;
export const StyledContent = styled.div``;
export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledInformLabel = styled.span`
  font-size: 13px;
  color: #636363;
`;

export const StyledHidenInput = styled.div`
  display: none;
`;
export const StyledOrderField = styled.div`
  width: 45%;
  margin-bottom: 15px;
`;
export const StyledMenuWrapper = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
`;
export const StyledTitle = styled.h3`
  margin-bottom: 20px;
  padding-left: 20px;
  padding-bottom: 10px;
  font-size: 23px;
  padding-top: 10px;
  font-weight: bold;
  box-shadow: 5px 5px 5px grey;
  color: ${props => props.theme.color.neutral};
  background: ${props => props.theme.color.watermelon};
`;
export const StyledOrderTitle = styled.h5`
  margin: 20px 0;
  font-size: 23px;
  font-weight: bold;
  color: ${props => props.theme.color.watermelon};
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
export const StyledOrderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
