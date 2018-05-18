import Styled from "styled-components";

const selectedPageStyles = {
  backgroundColor: "#4CAF50",
  color: "white",
};

// export const StyledRow = Styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content:space-between;
//   margin: 0 20px;
// `;
export const StyledPaginationWrapper = Styled.div`
  // display: flex;
  // flex-direction: column;
  // position:relative;
  // justify-content:center;
  // width: 100%;
`;
export const StyledNumberWrapper = Styled.ul`
// position: absolute;
// bottom: -50px;
// padding: 0;

`;
export const StyledNumber = Styled.li`
font-size:18px;
${props => (props.id === props.currentPage ? selectedPageStyles : "")};
display:inline-block;
color: black;
padding: 8px 16px;
transition: background-color .3s;
&:hover{
  background: #ddd;
  cursor:pointer;
}
`;
