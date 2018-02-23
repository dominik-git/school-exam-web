import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledFormWrapper = styled.div``;
export const StyledMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const StyledWrapper = styled.div``;

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
