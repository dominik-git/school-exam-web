import styled from "styled-components";

export const StyledWrapper = styled.div`
  min-height: 200px;
  &:hover {
    cursor: auto;
  }
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
