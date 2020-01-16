import styled from "styled-components";

export const StyledPhoto = styled.img`
  width: 100%;
  height: 100%;
`;

// export const StyledAboutItemRow = styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
// `;

export const StyledFotoWrapper = styled.div`
  width: 20%;
  margin: 20px;
  position: relative;
  height: 150px;
  display: inline-block;
`;

export const StyledDeleteIcon = styled.i`
  position: absolute;
  right: 0;
  top: 0;
  color: red;
  &:hover {
    cursor: pointer;
  }
`;
