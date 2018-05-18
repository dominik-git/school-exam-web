import styled from "styled-components";

export const Styledwrapper = styled.div`
  background: red;
  color: white;
  margin: 20px;
  display: inline-block;
  height: 30px;
  width: 30px;
`;
export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
`;

export const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 70%;
  margin: 40px auto;
`;
export const StyledContent = styled.div`
  box-shadow: 5px 5px 5px grey;
`;

export const StyledTitle = styled.h2`
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.theme.color.neutral};
  background: ${props => props.theme.color.watermelon};
`;

export const LeftIconWrapper = styled.div``;
export const ImagesWrapper = styled.div``;
export const StyledUpload = styled.span`
  &:hover {
    cursor: pointer;
    font-size: 15px;
  }
`;

export const StyledUploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-bottom: 20px;
  background: #c1c1c1;
`;

export const StyledImagesWrapper = styled.div``;
