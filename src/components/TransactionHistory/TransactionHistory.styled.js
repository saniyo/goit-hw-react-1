import styled from 'styled-components';

export const Table = styled.table`
  width: 670px;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  margin-right: auto;
  margin-left: auto;
  background-color: lightgray;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12), 0px 3px 3px rgba(0, 0, 0, 0.14),
    0px 6px 3px rgba(0, 0, 0, 0.2);
`;

export const Head = styled.thead`
  padding: 10px;
  height: 30px;
  background-color: lightblue;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Cell = styled.td`
  padding: 10px;
  text-align: center;
  border: 1px solid lightblue;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
