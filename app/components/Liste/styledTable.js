import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 35vh;
  background: #fafafa;
`;

export const Scrollable = styled.div`
  overflow-y: auto;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 50px;
  border-radius: 15px;
  background: #fafafa;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 4;
  text-align: center;
  // padding: 60px 35px 35px 35px;
  background: #ecf0f3;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #ffffff;
`;

export const StyledThead = styled.thead`
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  background: #24cfaa;
  box-shadow: 3px 3px 8px #cbced1, -3px -3px 8px #ffffff;
`;
export const StyledTbody = styled.tbody`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  color: #555;
`;

export const StyledTrow = styled.tr`
  width: 100%;
  background: none;
  font-size: 20px;
  color: #555;
  padding-bottom: 25em;
`;
