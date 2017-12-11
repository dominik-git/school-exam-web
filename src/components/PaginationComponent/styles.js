import Styled from "styled-components";

const selectedPageStyles = {
  backgroundColor: "#4CAF50",
  color: "white",
};
export const StyledPaginationWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  background: #b0e3e3;
  position:relative;
  min-height:400px;
`;
export const StyledNumberWrapper = Styled.ul`
position: absolute;
bottom: 0;
padding: 0;

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
