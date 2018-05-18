import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100%;
  background: ${props => props.theme.color.carbon};
  color: ${props => props.theme.color.neutral};
  text-align: center;
`;

export const StyledA = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.neutral};
  &:hover {
    pointer: cursor;
    color: ${props => props.theme.color.neutral};
  }
`;

export const StyledLogo = styled.img`
  width: 350px;
`;
export const StyledAwesomeIconWrapper = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 200px;
`;

export const StyledAwesomeIcon = styled.i`
  margin-right: 10px;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
export const StyledMessageWrapper = styled.div`
  font-size: 11px;
`;

export const StyledFooterContent = styled.div``;
