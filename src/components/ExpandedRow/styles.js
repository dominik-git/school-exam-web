import styled from "styled-components";

export const StyledWrapper = styled.div`
  position: relative;
`;
export const StyledClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
export const StyledFormOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  z-index: 5;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledOrderHeader = styled.span`
  font-weight: bold;
  margin-right: 30px;
`;

export const StyledOrderContext = styled.span`
  margin: 0 20px;
`;

export const StyledTableWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${props => props.theme.color.carbon};
`;
export const StyledDetailTitle = styled.h3`
  color: ${props => props.theme.color.carbon};
  padding-top: 20px;
  padding-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${props => props.theme.color.carbon};
`;
export const StyledTable = styled.table`
  width: 100%;
`;
export const StyledTableHeader = styled.thead`
  text-align: left;
`;
export const TableHeaderCell = styled.th``;
export const TableHeaderRow = styled.tr``;
export const TableBody = styled.tbody`
  text-align: left;
`;
export const TableBodyRow = styled.tr``;
export const TableBodyCell = styled.td``;
