import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 1500px;
  border-spacing: 4;
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
  padding: 60px 35px 35px 35px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
`;
export const StyledThead = styled.thead`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  background: #24cfaa;
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #ffffff;
`;
export const StyledTbody = styled.tbody`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  color: #555;
  box-shadow: inset 8px 8px 8px #cbced1;
`;

export const StyledTrow = styled.tr`
  width: 100%;
  background: none;
  font-size: 20px;
  color: #555;
  padding-bottom: 25em;
`;
