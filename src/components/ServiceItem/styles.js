import styled from "styled-components";

export const StyledWrapper = styled.div`
  min-height: 250px;
  border-radius: 3px;
  padding: 10px;
  background: ${props => props.theme.color.sky};
  margin: 20px;
  width: 28%;
  max-width: 400px;
  color: black;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 850px) {
    width: 55%;
    margin-bottom: 10px;
    min-width: 270px;
  }
`;
export const StyledItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;
  align-items: center;
  text-transform: capitalize;
`;
export const StyledItemFooter = styled.div`
  margin-top: 20px;
  color: ${props => props.theme.color.carbon};
  font-weight: bold;
  font-size: 20px;
`;
export const StyledItemBody = styled.div`
  font-size: 15px;
  height: 150px;
  color: ${props => props.theme.color.carbon};
  word-wrap: break-word;
  width: 100%;
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 21px;
  margin-left: 40px;
`;

export const StyledIconWrapper = styled.div`
  margin: 10px 10px 0px 0;
`;
